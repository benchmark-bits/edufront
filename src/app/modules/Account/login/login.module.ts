import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from '../../../shared/shared.module';
import { HelperModule } from '../../../shared/helpers/helper.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    SharedModule,
    HelperModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule { }
