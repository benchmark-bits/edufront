import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { CreateCompleteComponent } from './components/create-complete/create-complete.component';
import { AuthGuardService as AuthGuard} from '../../../shared/helpers/auth/auth.guard';


const routes: Routes = [
  {
    path: '', component: CreateAccountComponent,
  },
  {
    path: 'create-complete', component: CreateCompleteComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateAccountRoutingModule { }
