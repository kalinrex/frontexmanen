import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// Rutas
import { APP_ROUTES } from './app.routes';
import { RegisterComponent } from './login/register.component';

// Modules
import { PageModule } from './pages/pages.module';

// services
import { ServiceModule } from './services/service.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PageModule,
    ServiceModule,
    

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
