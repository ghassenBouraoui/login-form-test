import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from './login/login-form/login-form.component';
import { LoginFormConfirmationComponent } from './login/login-form-confirmation/login-form-confirmation.component';


const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'login/confirm', component: LoginFormConfirmationComponent },
  { path: '**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
