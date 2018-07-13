import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ListService } from '../../../../core/utils/list.service';
import { Title } from '@angular/platform-browser';
import { UiToolbarService, UiElement, UiSnackbar } from 'ng-smn-ui';
import { StorageService } from '../../../../core/utils/storage.service';
import { Router } from '@angular/router';

@Component({
    selector: 'aluno-list-component',
    templateUrl: 'aluno-list.component.html',
    styleUrls: ['aluno-list.component.scss']
})

export class AlunoListComponent implements OnInit, OnDestroy {
    listaAluno: ListService;
    listaCursos: ListService;
    elementList: any;
    cursos: Array<any>;
    @ViewChild('elementInsert') elementInsert;
    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService,
        private element: ElementRef,
        private storageService: StorageService,
        private router: Router
    ) {
        this.cursos = [];
    }

    ngOnInit() {
        this.titleService.setTitle('UnfaSystem - Alunos');
        this.toolbarService.set('Lista de alunos');
        this.toolbarService.activateExtendedToolbar(480);

        this.listaAluno = new ListService();
        this.listaCursos = new ListService();
        this.getInfo();
        this.getListaDisciplinas().then(() => {
            let current = this.listaCursos.getHead();

            for (let i = 0; i < this.listaCursos.size(); i++) {
                this.cursos.push(current.element);
                current = current.next;
            }

            this.initList(this.listaAluno);

        }, () => {
            UiSnackbar.show({
                text: 'Não foi possível carregar os cursos'
            });
        });

    }

    ngOnDestroy(): void {
        this.toolbarService.deactivateExtendedToolbar();
    }

    initList(list) {
        const length = list.size();
        let itemList = list.getHead();

        for (let i = 0; i < length; i++) {
            const node = `<tr class="item-list" data-id="${itemList.element.codigo}">
            <td data-title="Código" class="no-wrap">${itemList.element.codigo}</td>
            <td data-title="Nome" class="no-wrap">${itemList.element.nome}</td>
            <td data-title="Curso" class="no-wrap">${this.getNomeCurso(itemList.element.curso)}</td>
            </tr>`;
            this.elementInsert.nativeElement.innerHTML += node;
            itemList = itemList.next;
        }

        this.elementList = this.element.nativeElement.querySelectorAll('tr.item-list');
        this.addFunction();
    }

    addFunction() {
        this.elementList.forEach(el => {
            UiElement.on(el, 'click', (e) => {
                this.router.navigate(['aluno/' + e.target.parentElement.dataset.id]);
            });
        });
    }

    getInfo() {
        const storage = this.storageService.getItem('alunos');
        if (storage) {
            const objectStorage = JSON.parse(storage);
            this.listaAluno.setHead(objectStorage);
            this.listaAluno.setSize();
        }
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

    getNomeCurso(codigo: number): any {
        let retorno = '';
        this.cursos.forEach(item => {
            if (item.codigo == codigo) {
                retorno = item.nome;
            }
        });

        return retorno;
    }
}

