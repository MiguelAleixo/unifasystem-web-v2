import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SMNUIModule, UiToolbarService } from 'ng-smn-ui';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ApiService } from './core/api/api.service';
import { AuthGuard } from './views/auth/guard/auth.guard';

@NgModule({
    declarations: [],
    exports: [
        FormsModule,
        BrowserModule,
        SMNUIModule,
        HttpClientModule,
        RouterModule
    ],
    providers: [UiToolbarService, ApiService, AuthGuard],
    bootstrap: []
})
export class SharedModule {
}
