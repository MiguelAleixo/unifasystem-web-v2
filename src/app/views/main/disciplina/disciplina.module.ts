import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {SharedModule} from '../../../shared.module';
import { DisciplinaComponent } from './disciplina.component';
import { DisciplinaListComponent } from './list/disciplina-list.component';
import { DisciplinaInfoComponent } from './info/disciplina-info.component';


@NgModule({
    imports: [
        SharedModule
    ],
    exports: [],
    declarations: [DisciplinaComponent, DisciplinaListComponent, DisciplinaInfoComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DisciplinaModule {
}
