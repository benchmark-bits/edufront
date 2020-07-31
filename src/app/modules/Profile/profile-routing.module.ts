
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityComponent } from './components/security/security.component';
import { AddressComponent } from './components/address/address.component';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';
import { BioDetailsComponent } from './components/bio-details/bio-details.component';
import { ProfileSetupCompleteComponent } from './components/profile-setup-complete/profile-setup-complete.component';
import { AuthGuardService as AuthGuard} from '../../shared/helpers/auth/auth.guard';


const routes: Routes = [
  {
    path: '', component: BioDetailsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'profile-picture', component: ProfilePictureComponent, canActivate: [AuthGuard]
  },
  {
    path: 'address', component: AddressComponent, canActivate: [AuthGuard]
  },
  {
    path: 'security', component: SecurityComponent, canActivate: [AuthGuard]
  },

  {
    path: 'profile-setup-complete', component: ProfileSetupCompleteComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
