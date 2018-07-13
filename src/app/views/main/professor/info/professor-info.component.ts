import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UiToolbarService, UiElement, UiSnackbar } from 'ng-smn-ui';
import { StorageService } from '../../../../core/utils/storage.service';
import { ListService } from '../../../../core/utils/list.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../core/api/api.service';

@Component({
    selector: 'professor-info-component',
    templateUrl: 'professor-info.component.html',
    styleUrls: ['professor-info.component.scss']
})

export class ProfessorInfoComponent implements OnInit, OnDestroy {
    info: any;
    addingNew: boolean;
    index: number;
    estados: any;
    chips: any;
    disciplinas: any;
    selectedChips: any;
    buscandoCep: boolean;
    listaProfessores: ListService;
    listaDisciplinas: ListService;
    @ViewChild('formProfessor') formProfessor;
    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService,
        private storageService: StorageService,
        private element: ElementRef,
        private router: Router,
        private activedRoute: ActivatedRoute,
        private api: ApiService
    ) {
        this.info = { disciplinas: [] };
        this.estados = [];
        this.chips = [];
        this.disciplinas = [];
        this.selectedChips = [];
    }

    ngOnInit() {
        this.titleService.setTitle('UnifaSystem - Professor');
        this.toolbarService.set('Professores');
        this.toolbarService.activateExtendedToolbar(600);
        this.listaProfessores = new ListService();
        this.listaDisciplinas = new ListService();
        this.getListaProfessores();
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
            this.router.navigate(['professor']);
        });

        if (this.activedRoute.snapshot.params['id']) {
            setTimeout(() => {
                this.addingNew = false;
            });
            const res = this.listaProfessores.contains('codigo', this.activedRoute.snapshot.params['id']);
            this.info = res.element;
            this.index = res.index;
        } else {
            setTimeout(() => {
                this.addingNew = true;
            });
            this.getCodigo();
        }

        this.getEstados();
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
            this.listaProfessores.remove(this.listaProfessores.contains('codigo', this.info.codigo).index);
        }

        this.listaProfessores.append(this.info);

        const head = this.listaProfessores.getHead();
        this.storageService.setNewItem('professores', JSON.stringify(head));

        UiSnackbar.show({
            text: 'Professor ' + (this.addingNew ? 'cadastrado' : 'alterado') + ' com sucesso!'
        });

        this.router.navigate(['professor']);


    }

    getListaProfessores() {
        const storage = this.storageService.getItem('professores');
        if (storage) {
            const objectStorage = JSON.parse(storage);
            this.listaProfessores.setHead(objectStorage);
            this.listaProfessores.setSize();
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
        this.listaProfessores.remove(this.index);

        if(!this.listaProfessores.size()) {
            this.storageService.removeItem('professores');
        } else {
            const head = this.listaProfessores.getHead();
            this.storageService.setNewItem('professores', JSON.stringify(head));
        }
        
        UiSnackbar.show({
            text: 'Professor removido com sucesso'
        });

        this.router.navigate(['professor']);
    }


    getEstados() {
        this.estados = [
            { uf: 'AC', nome: 'Acre' },
            { uf: 'AL', nome: 'Alagoas' },
            { uf: 'AP', nome: 'Amapá' },
            { uf: 'AM', nome: 'Amazonas' },
            { uf: 'BA', nome: 'Bahia' },
            { uf: 'CE', nome: 'Ceará' },
            { uf: 'DF', nome: 'Distrito Federal' },
            { uf: 'ES', nome: 'Espírito Santo' },
            { uf: 'GO', nome: 'Goiás' },
            { uf: 'MA', nome: 'Maranhão' },
            { uf: 'MT', nome: 'Mato Grosso' },
            { uf: 'MS', nome: 'Mato Grosso do Sul' },
            { uf: 'MG', nome: 'Minas Gerais' },
            { uf: 'PA', nome: 'Pará' },
            { uf: 'PB', nome: 'Paraíba' },
            { uf: 'PR', nome: 'Paraná' },
            { uf: 'PE', nome: 'Pernambuco' },
            { uf: 'PI', nome: 'Piauí' },
            { uf: 'RJ', nome: 'Rio de Janeiro' },
            { uf: 'RN', nome: 'Rio Grande do Norte' },
            { uf: 'RS', nome: 'Rio Grande do Sul' },
            { uf: 'RO', nome: 'Rondônia' },
            { uf: 'RR', nome: 'Roraima' },
            { uf: 'SC', nome: 'Santa Catarina' },
            { uf: 'SP', nome: 'São Paulo' },
            { uf: 'SE', nome: 'Sergipe' },
            { uf: 'TO', nome: 'Tocantins' }
        ];
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

    verificaCpf(value) {
        if (this.listaProfessores.size()) {
            let current = this.listaProfessores.getHead();
            for (let i = 0; i < this.listaProfessores.size(); i++) {
                if ((!this.activedRoute.snapshot.params.id || current.element.codigo != this.activedRoute.snapshot.params.id) && current.element.cpf === value) {
                    this.formProfessor.controls.campoCpf.setErrors({ cpfExistente: true });
                    return false;
                }
                current = current.next;
            }
            this.formProfessor.controls.campoCpf.updateValueAndValidity();
            return true;
        }
    }

    getCodigo() {
        if (!this.listaProfessores.size()) {
            this.info.codigo = 1000;
        } else {
            let current = this.listaProfessores.getHead();
            while (current.next) {
                current = current.next;
            }
            this.info.codigo = parseInt(current.element.codigo, 10) + 1;
        }
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
                        this.info.cidade = res.localidade;
                    } else {
                        form.controls.campoCepCartao.setErrors({ invalidCep: true });
                        this.info.bairro = '';
                        this.info.logradouro = '';
                        this.info.uf = null;
                        this.info.cidade = '';
                    }

                }, (err) => {
                    console.log(err);
                }, () => {
                    this.buscandoCep = false;
                });
        }
    }
}
