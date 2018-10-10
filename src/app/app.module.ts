import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { LoginFormConfirmationComponent } from './login/login-form-confirmation/login-form-confirmation.component';

import { DataService } from './login/services/data.service';
import { LoginService } from './login/services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginFormConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
