
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { SecurityQuestionComponent } from './components/security-question/security-question.component';
import { SetNewPasswordComponent } from './components/set-new-password/set-new-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

@NgModule({
  declarations: [ForgotPasswordComponent, SecurityQuestionComponent, SetNewPasswordComponent],
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule
  ]
})
export class ForgotPasswordModule { }
