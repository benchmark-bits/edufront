import { NgModule } from '@angular/core';
import { CreateAccountRoutingModule } from './create-account-routing.module';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { SharedModule } from '../../../shared/shared.module';
import { EmailCheckerDirective } from '../../../shared/directives/EmailChecker';
import { CreateCompleteComponent } from './components/create-complete/create-complete.component';


@NgModule({
  declarations: [CreateAccountComponent, EmailCheckerDirective, CreateCompleteComponent],
  imports: [
    CreateAccountRoutingModule,
    SharedModule
  ]
})
export class CreateAccountModule { }
