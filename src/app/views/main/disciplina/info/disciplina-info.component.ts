import {Component, OnInit, OnDestroy, ElementRef} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {UiToolbarService, UiElement, UiSnackbar} from 'ng-smn-ui';
import {Router, Route, ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../../core/api/api.service';

@Component({
    selector: 'disciplina-info-component',
    templateUrl: 'disciplina-info.component.html',
    styleUrls: ['disciplina-info.component.scss']
})

export class DisciplinaInfoComponent implements OnInit, OnDestroy {
    info: any;
    addingNew: boolean;

    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService,
        private element: ElementRef,
        public router: Router,
        private activedRoute: ActivatedRoute,
        private api: ApiService
    ) {
        this.info = {};
    }

    ngOnInit() {
        this.titleService.setTitle('UnifaSystem - Disciplinas');
        this.toolbarService.set('Disciplinas');
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
                .prep('administracao', 'disciplina', 'inserir')
                .call(this.info)
                .subscribe(data => {
                    UiSnackbar.show({
                        text: 'Disciplina alterada com sucesso!'
                    });

                    this.router.navigate(['disciplina']);
                }, err => {
                    UiSnackbar.show({
                        message: 'Erro ao cadastrar disciplinas'
                    });
                });
        } else {
            this.api
                .prep('administracao', 'disciplina', 'atualizar')
                .call(this.info)
                .subscribe(() => {
                    UiSnackbar.show({
                        text: 'Disciplina alterada com sucesso!'
                    });

                    this.router.navigate(['disciplina']);
                }, () => {
                    UiSnackbar.show({
                        message: 'Erro ao atualizar disciplinas'
                    });
                });
        }
    }

    getInfo() {
        this.api
            .prep('administracao', 'disciplina', 'selecionarPorId')
            .call({id: this.activedRoute.snapshot.params.id})
            .subscribe(data => {
                this.info = data.content;
            }, () => {
                UiSnackbar.show({
                    message: 'Erro ao cadastrar disciplinas'
                });
            });
    }

    confirmDelete() {
        this.api
            .prep('administracao', 'disciplina', 'excluir')
            .call({id: this.info.id})
            .subscribe(() => {
                UiSnackbar.show({
                    message: 'Disciplina excluída com sucesso'
                });
                this.router.navigate(['disciplina']);

            }, () => {
                UiSnackbar.show({
                    message: 'Erro ao excluir disciplinas'
                });
            });
    }
}
