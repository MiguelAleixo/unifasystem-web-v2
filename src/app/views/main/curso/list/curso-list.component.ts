import {Component, OnInit, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {UiToolbarService, UiElement, UiSnackbar} from 'ng-smn-ui';
import {Router} from '@angular/router';
import {ApiService} from '../../../../core/api/api.service';

@Component({
    selector: 'curso-list-component',
    templateUrl: 'curso-list.component.html',
    styleUrls: ['curso-list.component.scss']
})

export class CursoListComponent implements OnInit, OnDestroy {
    list: any;
    loading: boolean;
    totalLinhas: number;
    pagina: number;

    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService,
        private element: ElementRef,
        private router: Router,
        private api: ApiService
    ) {
        this.list = [];
        this.pagina = 1;
    }

    ngOnInit() {
        this.titleService.setTitle('UnfaSystem - Cursos');
        this.toolbarService.set('Lista de cursos');
        this.toolbarService.activateExtendedToolbar(480);

        this.getInfo();
    }

    ngOnDestroy(): void {
        this.toolbarService.deactivateExtendedToolbar();
    }

    getInfo() {
        if (!this.loading) {
            this.loading = true;

            this.api
                .prep('administracao', 'curso', 'selecionar')
                .call({
                    filtro: '',
                    pagina: this.pagina,
                    linhas: 10
                })
                .subscribe(data => {
                    this.list = data.content;
                    this.totalLinhas = data.totalLinhas;
                }, () => {
                    UiSnackbar.show({
                        text: 'Não foi possível carregar os cursos'
                    });
                }, () => {
                    this.loading = false;
                });
        }
    }
}

