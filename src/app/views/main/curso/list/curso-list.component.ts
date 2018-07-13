import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ListService } from '../../../../core/utils/list.service';
import { Title } from '@angular/platform-browser';
import { UiToolbarService, UiElement } from 'ng-smn-ui';
import { StorageService } from '../../../../core/utils/storage.service';
import { element } from 'protractor';
import { Router } from '@angular/router';

@Component({
    selector: 'curso-list-component',
    templateUrl: 'curso-list.component.html',
    styleUrls: ['curso-list.component.scss']
})

export class CursoListComponent implements OnInit, OnDestroy {
    listaCursos: ListService;
    elementList: any;
    @ViewChild('elementInsert') elementInsert;
    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService,
        private element: ElementRef,
        private storageService: StorageService,
        private router: Router
    ) { }

    ngOnInit() {
        this.titleService.setTitle('UnfaSystem - Cursos');
        this.toolbarService.set('Lista de cursos');
        this.toolbarService.activateExtendedToolbar(480);

        this.listaCursos = new ListService();
        this.getInfo();
        this.initList(this.listaCursos);
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
                this.router.navigate(['curso/' + e.target.parentElement.dataset.id]);
            });
        });
    }

    getInfo() {
        const storage = this.storageService.getItem('cursos');
        if (storage) {
            const objectStorage = JSON.parse(storage);
            this.listaCursos.setHead(objectStorage);
            this.listaCursos.setSize();
        }
    }
}

