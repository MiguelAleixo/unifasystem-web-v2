import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UiToolbarService, UiElement, UiSnackbar } from 'ng-smn-ui';
import { StorageService } from '../../../../core/utils/storage.service';
import { ListService } from '../../../../core/utils/list.service';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'curso-info-component',
    templateUrl: 'curso-info.component.html',
    styleUrls: ['curso-info.component.scss']
})

export class CursoInfoComponent implements OnInit, OnDestroy {
    info: any;
    addingNew: boolean;
    index: number;
    estados: any;
    cursos: Array<any>;
    chips: any;
    disciplinas: any;
    selectedChips: any;
    listaCursos: ListService;
    listaDisciplinas: ListService;
    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService,
        private storageService: StorageService,
        private element: ElementRef,
        private router: Router,
        private activedRoute: ActivatedRoute,
    ) {
        this.info = { disciplinas: [] };
        this.chips = [];
        this.disciplinas = [];
        this.selectedChips = [];
    }

    ngOnInit() {
        this.titleService.setTitle('UnifaSystem - Cursos');
        this.toolbarService.set('Cursos');
        this.toolbarService.activateExtendedToolbar(600);
        this.listaCursos = new ListService();
        this.listaDisciplinas = new ListService();
        this.getLista();
        this.getListaDisciplinas().then(() => {
            let current = this.listaDisciplinas.getHead();

            for (let i = 0; i < this.listaDisciplinas.size(); i++) {
                this.disciplinas.push(current.element);
                current = current.next;
            }

            this.loadChips();
        }, () => {
            UiSnackbar.show({
                text: 'Não foi possível carregar as disciplinas'
            });
            this.router.navigate(['curso']);
        });


        if (this.activedRoute.snapshot.params['id']) {
            setTimeout(() => {
                this.addingNew = false;
            });
            const res = this.listaCursos.contains('codigo', this.activedRoute.snapshot.params['id']);
            this.info = res.element;
            this.index = res.index;
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
            this.listaCursos.remove(this.listaCursos.contains('codigo', this.info.codigo).index);
        }

        this.listaCursos.append(this.info);

        const head = this.listaCursos.getHead();
        this.storageService.setNewItem('cursos', JSON.stringify(head));

        UiSnackbar.show({
            text: 'Curso ' + (this.addingNew ? 'cadastrado' : 'alterado') + ' com sucesso!'
        });

        this.router.navigate(['curso']);
    }

    getLista() {
        const storage = this.storageService.getItem('cursos');
        if (storage) {
            const objectStorage = JSON.parse(storage);
            this.listaCursos.setHead(objectStorage);
            this.listaCursos.setSize();
        }
    }

    getListaDisciplinas() {
        return new Promise((resolve, reject) => {
            const storage = this.storageService.getItem('disciplinas');
            if (storage) {
                const objectStorage = JSON.parse(storage);
                this.listaDisciplinas.setHead(objectStorage);
                this.listaDisciplinas.setSize();
                resolve();
            } else {
                reject();
            }
        });
    }

    confirmDelete() {
        this.listaCursos.remove(this.index);
        
        if (!this.listaCursos.size()) {
            this.storageService.removeItem('cursos');
        } else {
            const head = this.listaCursos.getHead();
            this.storageService.setNewItem('cursos', JSON.stringify(head));
        }

        UiSnackbar.show({
            text: 'Curso removido com sucesso'
        });

        this.router.navigate(['curso']);
    }

    loadChips() {
        const chips = JSON.parse(JSON.stringify(this.disciplinas));
        this.info.disciplinas.forEach(selectedChip => {
            chips.forEach((chip, i) => {
                if (chip.codigo === selectedChip.codigo) {
                    chips.splice(i, 1);
                }
            });
        });

        this.chips = chips;
    }

    chipSelect(chip) {
        this.info.disciplinas.push(JSON.parse(JSON.stringify(chip)));
        setTimeout(() => {
            delete this.chips.search;
        });
    }

    removeChip(chip) {
        this.info.disciplinas.splice(this.info.disciplinas.indexOf(chip), 1);
    }


    getCodigo() {
        if (!this.listaCursos.size()) {
            this.info.codigo = 1000;
        } else {
            let current = this.listaCursos.getHead();
            while (current.next) {
                current = current.next;
            }
            this.info.codigo = parseInt(current.element.codigo, 10) + 1;
        }
    }
}
