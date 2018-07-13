import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { CursoComponent } from './curso.component';
import { CursoListComponent } from './list/curso-list.component';
import { CursoInfoComponent } from './info/curso-info.component';


@NgModule({
    imports: [
        SharedModule
    ],
    exports: [],
    declarations: [CursoComponent, CursoListComponent, CursoInfoComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CursoModule {
}
