import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UiToolbarService, UiElement, UiSnackbar } from 'ng-smn-ui';
import { StorageService } from '../../../../core/utils/storage.service';
import { ListService } from '../../../../core/utils/list.service';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'disciplina-info-component',
    templateUrl: 'disciplina-info.component.html',
    styleUrls: ['disciplina-info.component.scss']
})

export class DisciplinaInfoComponent implements OnInit, OnDestroy {
    info: any;
    addingNew: boolean;
    index: number;
    estados: any;
    cursos: Array<any>;
    listaDisciplinas: ListService;
    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService,
        private storageService: StorageService,
        private element: ElementRef,
        private router: Router,
        private activedRoute: ActivatedRoute,
    ) {
        this.info = {};

    }

    ngOnInit() {
        this.titleService.setTitle('UnifaSystem - Disciplinas');
        this.toolbarService.set('Disciplinas');
        this.toolbarService.activateExtendedToolbar(600);
        this.listaDisciplinas = new ListService();
        this.getLista();

        if (this.activedRoute.snapshot.params['id']) {
            setTimeout(() => {
                this.addingNew = false;
            });
            const res = this.listaDisciplinas.contains('codigo', this.activedRoute.snapshot.params['id']);
            this.info = res.element;
            this.index = res.index;
            this.info.cargaHoraria = parseInt(this.info.cargaHoraria, 10);
        } else {
            setTimeout(() => {
                this.addingNew = true;
            });
            this.getCodigo();
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

        if (!this.addingNew) {
            this.listaDisciplinas.remove(this.listaDisciplinas.contains('codigo', this.info.codigo).index);
        }

        this.listaDisciplinas.append(this.info);

        const head = this.listaDisciplinas.getHead();
        this.storageService.setNewItem('disciplinas', JSON.stringify(head));

        UiSnackbar.show({
            text: 'Disciplina ' + (this.addingNew ? 'cadastrada' : 'alterada') + ' com sucesso!'
        });

        this.router.navigate(['disciplina']);
    }

    getLista() {
        const storage = this.storageService.getItem('disciplinas');
        if (storage) {
            const objectStorage = JSON.parse(storage);
            this.listaDisciplinas.setHead(objectStorage);
            this.listaDisciplinas.setSize();
        }
    }

    confirmDelete() {
        this.listaDisciplinas.remove(this.index);

        if(!this.listaDisciplinas.size()) {
            this.storageService.removeItem('disciplinas');
        } else {
            const head = this.listaDisciplinas.getHead();
            this.storageService.setNewItem('disciplinas', JSON.stringify(head));
        }
        
        UiSnackbar.show({
            text: 'Disciplina removida com sucesso'
        });

        this.router.navigate(['disciplina']);
    }

    getCodigo() {
        if (!this.listaDisciplinas.size()) {
            this.info.codigo = "1000";
        } else {
            let current = this.listaDisciplinas.getHead();
            while (current.next) {
                current = current.next;
            }
            this.info.codigo = parseInt(current.element.codigo, 10) + 1;
        }
    }
}
