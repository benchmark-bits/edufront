import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { BioDetailsComponent } from './components/bio-details/bio-details.component';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';
import { AddressComponent } from './components/address/address.component';
import { SecurityComponent } from './components/security/security.component';
import { SharedModule } from '../../shared/shared.module';
import { ProfileSetupCompleteComponent } from './components/profile-setup-complete/profile-setup-complete.component';


@NgModule({
  declarations: [BioDetailsComponent, ProfilePictureComponent, AddressComponent, SecurityComponent, ProfileSetupCompleteComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
