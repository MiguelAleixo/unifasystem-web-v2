import {Component, OnInit, OnDestroy, ElementRef} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {UiToolbarService, UiElement, UiSnackbar} from 'ng-smn-ui';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../../core/api/api.service';
import {environment} from '../../../../../environments/environment';

@Component({
    selector: 'professor-info-component',
    templateUrl: 'professor-info.component.html',
    styleUrls: ['professor-info.component.scss']
})

export class ProfessorInfoComponent implements OnInit, OnDestroy {
    info: any;
    addingNew: boolean;
    buscandoCep: boolean;
    estados;
    cidades;

    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService,
        public router: Router,
        private activedRoute: ActivatedRoute,
        private api: ApiService,
        private element: ElementRef
    ) {
        this.info = {
            endereco: {}
        };
        this.estados = [];
        this.cidades = [];
    }

    ngOnInit() {
        this.titleService.setTitle('UnifaSystem - Professor');
        this.toolbarService.set('Professor');
        this.toolbarService.activateExtendedToolbar(600);

        if (this.activedRoute.snapshot.params['id']) {
            setTimeout(() => {
                this.addingNew = false;
            });
            this.getInfo();
        } else {
            setTimeout(() => {
                this.addingNew = true;
            });
        }

        this.getEstados();
        this.getCidades();
    }

    ngOnDestroy() {
        this.toolbarService.deactivateExtendedToolbar();
    }

    onSubmit(form) {
        for (const control in form.controls) {
            if (form.controls.hasOwnProperty(control)) {
                form.controls[control].markAsTouched();
                form.controls[control].markAsDirty();
            }
        }

        if (!form.valid) {
            UiElement.focus(this.element.nativeElement.querySelector('form .ng-invalid'));
            return false;
        }

        if (this.addingNew) {
            this.api
                .prep('administracao', 'professor', 'inserir')
                .call(this.info)
                .subscribe(() => {
                    UiSnackbar.show({
                        text: 'Professor cadastrado com sucesso!'
                    });
                    this.router.navigate(['professor']);
                });
        } else {
            this.api
                .prep('administracao', 'professor', 'atualizar')
                .call(this.info)
                .subscribe(() => {
                    UiSnackbar.show({
                        text: 'Professor alterado com sucesso!'
                    });
                    this.router.navigate(['professor']);
                });
        }
    }

    getInfo() {
        this.api
            .prep('administracao', 'professor', 'selecionarPorId')
            .call({
                id: this.activedRoute.snapshot.params.id
            })
            .subscribe(data => {
                this.info = data.content;
            }, () => {
                UiSnackbar.show({
                    text: 'Não foi possível buscar os dados'
                });
            });
    }

    confirmDelete() {
        this.api
            .prep('administracao', 'professor', 'excluir')
            .call({id: this.info.id})
            .subscribe(() => {
                UiSnackbar.show({
                    text: 'Professor removido com sucesso'
                });
                this.router.navigate(['professor']);
            });
    }

    getCep(form, value) {
        if (!this.buscandoCep) {
            this.buscandoCep = true;

            this.api
                .http('GET', `https://viacep.com.br/ws/${value}/json/`)
                .call()
                .subscribe((res) => {
                    if (!res.erro) {
                        this.info.bairro = res.bairro;
                        this.info.logradouro = res.logradouro;
                        this.info.uf = res.uf;
                        this.info.idCidade = res.ibge;
                    } else {
                        form.controls.campoCepCartao.setErrors({invalidCep: true});
                        this.info.bairro = '';
                        this.info.logradouro = '';
                        this.info.uf = null;
                        this.info.idCidade = '';
                    }

                }, (err) => {
                    console.log(err);
                }, () => {
                    this.buscandoCep = false;
                });
        }
    }

    verifyLogon(form, logon) {
        if (logon.length) {
            this.api
                .http('POST', `${environment.AUTH_API}/login/dados`)
                .call({login: logon})
                .subscribe((res) => {
                    form.controls.campoLogon.setErrors({alreadyExist: true});
                    UiSnackbar.show({
                        text: 'Logon já cadastrado, por favor escolha outro'
                    });
                }, null, () => {
                    this.buscandoCep = false;
                });
        }
    }

    getEstados() {
        this.api
            .prep('administracao', 'estado', 'selecionar')
            .call()
            .subscribe(data => {
                this.estados = data.content;
            });
    }

    getCidades() {
        this.api
            .prep('administracao', 'cidade', 'selecionar')
            .call({uf: this.info.uf || ''})
            .subscribe(data => {
                this.cidades = data.content;
            });
    }

    senhasIguais(form) {
        if (this.info.senha && this.info.confirmaSenha) {
            if (this.info.senha !== this.info.confirmaSenha) {
                form.controls['campoSenha'].setErrors({wrongPass: true});
                form.controls['campoConfirmaSenha'].setErrors({wrongPass: true});
                return false;
            }
            form.controls['campoSenha'].updateValueAndValidity();
            form.controls['campoConfirmaSenha'].updateValueAndValidity();
        }
    }

    changeVisibility(el, btn) {
        if (el.type === 'text') {
            el.type = 'password';
            this.element.nativeElement.querySelectorAll('.change-type i')[btn].innerHTML = 'visibility';
        } else {
            el.type = 'text';
            this.element.nativeElement.querySelectorAll('.change-type i')[btn].innerHTML = 'visibility_off';
        }
    }
}
