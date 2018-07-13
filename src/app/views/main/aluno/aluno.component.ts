import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';

@Component({
    selector: 'aluno-component',
    templateUrl: 'aluno.component.html',
    styleUrls: []
})

export class AlunoComponent implements OnInit {

    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService
    ) { }

    ngOnInit() {
        this.titleService.setTitle('Alunos');
        this.toolbarService.set('Alunos');
    }
}
