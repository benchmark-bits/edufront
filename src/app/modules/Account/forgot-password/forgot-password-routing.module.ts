

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SecurityQuestionComponent } from './components/security-question/security-question.component';
import { SetNewPasswordComponent } from './components/set-new-password/set-new-password.component';


const routes: Routes = [
  {
    path: '', component: ForgotPasswordComponent
  },
  {
    path: 'security-question', component: SecurityQuestionComponent
  },
  {
    path: 'set-new-password', component: SetNewPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgotPasswordRoutingModule { }
