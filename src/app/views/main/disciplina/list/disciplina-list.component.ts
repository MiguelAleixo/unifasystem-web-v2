import { Component, OnInit, ElementRef, OnDestroy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UiToolbarService, UiSnackbar, UiElement } from 'ng-smn-ui';
import { Router } from '@angular/router';
import { ApiService } from '../../../../core/api/api.service';
import { Subject } from '../../../../../../node_modules/rxjs';
import { Location } from '@angular/common';
import { debounceTime, distinctUntilChanged } from '../../../../../../node_modules/rxjs/operators';

@Component({
    selector: 'disciplina-list-component',
    templateUrl: 'disciplina-list.component.html',
    styleUrls: ['disciplina-list.component.scss']
})

export class DisciplinaListComponent implements OnInit, OnDestroy, AfterViewInit {
    disciplinas: any;
    totalLinhas: Number;
    pagina: Number;
    loading: boolean;
    searchOpen: boolean;
    searching: boolean;
    searchText: string;
    private searchTerms = new Subject<string>();
    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService,
        private element: ElementRef,
        private api: ApiService,
        public _location: Location,
        private changeDetectorRef: ChangeDetectorRef,
    ) {
        this.disciplinas = [];
        this.totalLinhas = 0;
        this.pagina = 1;
    }

    ngOnInit() {
        this.titleService.setTitle('UnfaSystem - Disciplinas');
        this.toolbarService.set('Lista de disciplinas');
        this.toolbarService.activateExtendedToolbar(480);

        this.searchTerms.pipe(
            debounceTime(300),
            distinctUntilChanged()
        )
            .subscribe(() => {
                if (!this.searchText || this.searchText.length <= 200) {
                    this.searching = true;
                    this.getDisciplinas();
                }
            });
    }

    ngOnDestroy(): void {
        this.toolbarService.deactivateExtendedToolbar();
    }

    ngAfterViewInit() {
        this.getDisciplinas();
    }

    search(term: string) {
        this.searchTerms.next(term);
    }

    toggleSearch() {
        const inputSearch = this.element.nativeElement.querySelector('input[name="searchText"]');

        if (this.searchOpen) {
            this.searchOpen = false;
            UiElement.closest(inputSearch, 'form').style.right = '';
            this.searchText = '';
            this.getDisciplinas();
        } else {
            this.searchOpen = true;
            UiElement.closest(inputSearch, 'form').style.right = UiElement.closest(inputSearch, '.align-right').clientWidth + 'px';

            setTimeout(() => {
                inputSearch.focus();
            }, 280);
        }
    }

    getDisciplinas(): void {
        if (!this.loading && (!this.searchText || this.searchText.length <= 200)) {
            this.loading = true;
            this.changeDetectorRef.detectChanges();

            this.api
                .prep('administracao', 'disciplina', 'selecionar')
                .call({
                    filtro: this.searchText || '',
                    pagina: this.pagina
                })
                .subscribe(res => {
                    this.disciplinas = res.content;
                    this.totalLinhas = res.totalLinhas;
                }, () => {
                    UiSnackbar.show({
                        text: 'Não foi possível carregar as disciplinas'
                    });
                }, () => {
                    this.loading = false;
                    this.searching = false;
                });
        }
    }


}

