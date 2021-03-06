import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UiSnackbar } from 'ng-smn-ui';
import { UserService } from '../../../core/utils/user/user.service';
import { ApiService } from '../../../core/api/api.service';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private api: ApiService) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const usuario = UserService.getUser();
        if (usuario.id) {
            return true;
        } else {
            return this.remakeLogin();
        }
    }

    remakeLogin(): any {
        return new Promise<boolean>(resolve => {
            const cookies = UserService.getCookie();

            if (cookies.authentication) {
                const headers = {
                    'Content-Type': 'application/json',
                    'Authentication': cookies.authentication
                };

                this.api
                    .http('GET', `${environment.AUTH_API}/login/refazer`, { headers: headers })
                    .call()
                    .subscribe(res => {
                        const content = res.content;
                        this.api.set(content.api, content.user.opcoes);
                        UserService.setToken(content.token, !!cookies.keepConnect);
                        UserService.setMenu(content.user.opcoes);
                        UserService.setUser(content.user);
                        resolve(true);
                    }, (res) => {
                        this.handleError(res);
                        resolve(false);
                    });
            } else {
                this.handleError({ status: 401 });
                resolve(false);
            }
        });
    }

    handleError(res): any {
        switch (res.status) {
            case 401:
                let text: string;
                switch (res.executionCode) {
                    case 2:
                        text = 'Parece que sua senha está incorreta, tente refazer o login';
                        break;
                    case 3:
                        text = 'Seu usuário está bloqueado';
                        break;
                    case 4:
                        text = 'Sua senha expirou, tente refazer o login';
                        break;
                    case 5:
                        text = 'Você está bloqueado à acessar neste horário';
                        break;
                    default:
                        text = 'Seu login expirou. Refaça o login novamente';
                        break;
                }
                UiSnackbar.show({
                    text,
                    actionText: 'OK',
                    action: close => close()
                });
                this.router.navigate(['/login']);
                break;
            case 403:
                this.router.navigate(['/forbidden']);
                break;
            case 404:
                UiSnackbar.show({
                    text: 'Não conseguimos encontrar seu usuário, tente refazer o login',
                    actionText: 'OK',
                    action: close => close()
                });
                this.router.navigate(['/login']);
                break;
        }
    }
}
