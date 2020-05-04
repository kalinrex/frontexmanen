import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({
    imports:[
        RouterModule,
        CommonModule,
    ],
    declarations: [
        HeaderComponent,
        BreadcrumsComponent,
        NopagefoundComponent,
        SidebarComponent
    ],
    exports: [
        HeaderComponent,
        BreadcrumsComponent,
        NopagefoundComponent,
        SidebarComponent
    ]
})
export class SharedModule { }
