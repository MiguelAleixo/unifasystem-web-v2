import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UiToolbarService } from 'ng-smn-ui';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../../core/api/api.service';
import { ListService } from '../../../core/utils/list.service';

@Component({
    selector: 'curso-component',
    templateUrl: './curso.component.html',
})
export class CursoComponent implements OnInit {
    constructor(private titleService: Title,
        private toolbarService: UiToolbarService,
        private element: ElementRef) {
    }

    ngOnInit() { }
}
