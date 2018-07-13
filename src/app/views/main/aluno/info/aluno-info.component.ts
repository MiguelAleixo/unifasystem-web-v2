import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UiToolbarService, UiElement, UiSnackbar } from 'ng-smn-ui';
import { StorageService } from '../../../../core/utils/storage.service';
import { ListService } from '../../../../core/utils/list.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../core/api/api.service';

@Component({
    selector: 'aluno-info-component',
    templateUrl: 'aluno-info.component.html',
    styleUrls: ['aluno-info.component.scss']
})

export class AlunoInfoComponent implements OnInit, OnDestroy {
    info: any;
    addingNew: boolean;
    index: number;
    estados: any;
    buscandoCep: boolean;
    cursos: Array<any>;
    listaAluno: ListService;
    listaCursos: ListService;
    @ViewChild('formAluno') formAluno;
    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService,
        private storageService: StorageService,
        private element: ElementRef,
        private router: Router,
        private activedRoute: ActivatedRoute,
        private api: ApiService
    ) {
        this.info = {};
        this.estados = [];
        this.cursos = [];
    }

    ngOnInit() {
        this.titleService.setTitle('UnifaSystem - Alunos');
        this.toolbarService.set('Alunos');
        this.toolbarService.activateExtendedToolbar(600);
        this.listaAluno = new ListService();
        this.listaCursos = new ListService();
        this.getLista();

        this.getListaDisciplinas().then(() => {
            let current = this.listaCursos.getHead();

            for (let i = 0; i < this.listaCursos.size(); i++) {
                this.cursos.push(current.element);
                current = current.next;
            }
        }, () => {
            UiSnackbar.show({
                text: 'Não foi possível carregar os cursos'
            });
            this.router.navigate(['aluno']);
        });

        this.getEstados();

        setTimeout(() => {
            if (this.activedRoute.snapshot.params['id']) {
                setTimeout(() => {
                    this.addingNew = false;
                });
                const res = this.listaAluno.contains('codigo', this.activedRoute.snapshot.params['id']);
                this.info = res.element;
                this.index = res.index;
                this.info.codigo = parseInt(this.info.codigo, 10);
            } else {
                setTimeout(() => {
                    this.addingNew = true;
                });
                this.getCodigo();
            }
        });
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
            this.listaAluno.remove(this.listaAluno.contains('codigo', this.info.codigo).index);
        }
        this.listaAluno.append(this.info);

        const head = this.listaAluno.getHead();
        this.storageService.setNewItem('alunos', JSON.stringify(head));

        UiSnackbar.show({
            text: 'Aluno ' + (this.addingNew ? 'cadastrado' : 'alterado') + ' com sucesso!'
        });

        this.router.navigate(['aluno']);
    }

    getLista() {
        const storage = this.storageService.getItem('alunos');
        if (storage) {
            const objectStorage = JSON.parse(storage);
            this.listaAluno.setHead(objectStorage);
            this.listaAluno.setSize();
        }
    }

    confirmDelete() {
        this.listaAluno.remove(this.index);

        if (!this.listaAluno.size()) {
            this.storageService.removeItem('alunos');
        } else {
            const head = this.listaAluno.getHead();
            this.storageService.setNewItem('alunos', JSON.stringify(head));
        }
        
        UiSnackbar.show({
            text: 'Aluno removido com sucesso'
        });

        this.router.navigate(['aluno']);
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

    getListaDisciplinas() {
        return new Promise((resolve, reject) => {
            const storage = this.storageService.getItem('cursos');
            if (storage) {
                const objectStorage = JSON.parse(storage);
                this.listaCursos.setHead(objectStorage);
                this.listaCursos.setSize();
                resolve();
            } else {
                reject();
            }
        });
    }


    getCodigo() {
        if (!this.listaAluno.size()) {
            this.info.codigo = 1000;
        } else {
            let current = this.listaAluno.getHead();
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

    verificaCpf(value) {
        if (this.listaAluno.size()) {
            let current = this.listaAluno.getHead();
            for (let i = 0; i < this.listaAluno.size(); i++) {
                if ((!this.activedRoute.snapshot.params.id || current.element.codigo != this.activedRoute.snapshot.params.id) && current.element.cpf === value) {
                    this.formAluno.controls.campoCpf.setErrors({ cpfExistente: true });
                    return false;
                }
                current = current.next;
            }
            this.formAluno.controls.campoCpf.updateValueAndValidity();
            return true;
        }
    }
}
