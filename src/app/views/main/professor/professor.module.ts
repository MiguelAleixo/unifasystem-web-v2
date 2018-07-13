import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProfessorComponent } from './professor.component';
import { ProfessorListComponent } from './list/professor-list.component';
import { SharedModule } from '../../../shared.module';
import { ProfessorInfoComponent } from './info/professor-info.component';


@NgModule({
    imports: [
        SharedModule
    ],
    exports: [],
    declarations: [ProfessorComponent, ProfessorListComponent, ProfessorInfoComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfessorModule { }
