import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from "@angular/core";

import { SharedModule } from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        AccountSettingsComponent,
    ],
    exports: [
        DashboardComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule
    ],
    providers:[DatePipe]
})

export class PageModule { }
