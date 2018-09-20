import {Component, OnInit, OnDestroy, ElementRef} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {UiToolbarService, UiElement, UiSnackbar} from 'ng-smn-ui';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../../core/api/api.service';

@Component({
    selector: 'curso-info-component',
    templateUrl: 'curso-info.component.html',
    styleUrls: ['curso-info.component.scss']
})

export class CursoInfoComponent implements OnInit, OnDestroy {
    info: any;
    addingNew: boolean;
    professores: any;

    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService,
        public router: Router,
        private activedRoute: ActivatedRoute,
        private api: ApiService,
        private element: ElementRef
    ) {
        this.info = {};
        this.professores = [];
    }

    ngOnInit() {
        this.titleService.setTitle('UnifaSystem - Cursos');
        this.toolbarService.set('Cursos');
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

        this.getProfessores();
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
                .prep('administracao', 'curso', 'inserir')
                .call(this.info)
                .subscribe(() => {
                    UiSnackbar.show({
                        text: 'Curso cadastrado com sucesso!'
                    });
                    this.router.navigate(['curso']);
                });
        } else {
            this.api
                .prep('administracao', 'curso', 'atualizar')
                .call(this.info)
                .subscribe(() => {
                    UiSnackbar.show({
                        text: 'Curso alterado com sucesso!'
                    });
                    this.router.navigate(['curso']);
                });
        }
    }

    getInfo() {
        this.api
            .prep('administracao', 'curso', 'selecionarPorId')
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
            .prep('administracao', 'curso', 'excluir')
            .call({id: this.info.id})
            .subscribe(() => {
                UiSnackbar.show({
                    text: 'Curso removido com sucesso'
                });
                this.router.navigate(['curso']);
            });
    }

    getProfessores() {
        this.api
            .prep('administracao', 'professor', 'selecionarSimples')
            .call()
            .subscribe(data => {
                this.professores = data.content;
            }, () => {
                UiSnackbar.show({
                    text: 'Erro ao buscar professores'
                });
                this.router.navigate(['curso']);
            });
    }

    /*loadChips() {
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
    }*/
}
