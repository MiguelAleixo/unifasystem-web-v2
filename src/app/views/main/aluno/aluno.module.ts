import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { AlunoComponent } from './aluno.component';
import { AlunoListComponent } from './list/aluno-list.component';
import { AlunoInfoComponent } from './info/aluno-info.component';


@NgModule({
    imports: [
        SharedModule
    ],
    exports: [],
    declarations: [AlunoComponent, AlunoListComponent, AlunoInfoComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AlunoModule { }
