import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UiToolbarService, UiElement, UiSnackbar } from 'ng-smn-ui';
import { StorageService } from '../../../../core/utils/storage.service';
import { ListService } from '../../../../core/utils/list.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../core/api/api.service';

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
        private router: Router,
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
                        text: 'Disciplina ' + (this.addingNew ? 'cadastrada' : 'alterada') + ' com sucesso!'
                    });

                    this.router.navigate(['disciplina']);
                }, err => {
                    UiSnackbar.show({
                        message: 'Erro ao cadastrar disciplinas'
                    });
                });
        }
    }

    // getLista() {
    //     const storage = this.storageService.getItem('disciplinas');
    //     if (storage) {
    //         const objectStorage = JSON.parse(storage);
    //         this.listaDisciplinas.setHead(objectStorage);
    //         this.listaDisciplinas.setSize();
    //     }
    // }

    // confirmDelete() {
    //     this.listaDisciplinas.remove(this.index);

    //     if(!this.listaDisciplinas.size()) {
    //         this.storageService.removeItem('disciplinas');
    //     } else {
    //         const head = this.listaDisciplinas.getHead();
    //         this.storageService.setNewItem('disciplinas', JSON.stringify(head));
    //     }

    //     UiSnackbar.show({
    //         text: 'Disciplina removida com sucesso'
    //     });

    //     this.router.navigate(['disciplina']);
    // }
}
