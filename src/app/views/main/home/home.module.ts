import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {SharedModule} from "../../../shared.module";
import {HomeComponent} from './home.component';

@NgModule({
    imports: [
        SharedModule
    ],
    exports: [],
    declarations: [HomeComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {
}
