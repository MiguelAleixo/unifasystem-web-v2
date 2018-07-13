import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';

@Component({
    selector: 'professor-component',
    templateUrl: 'professor.component.html',
    styleUrls: []
})

export class ProfessorComponent implements OnInit {

    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService
    ) { }

    ngOnInit() {
        this.titleService.setTitle('Professores');
        this.toolbarService.set('Professores');
    }
}
