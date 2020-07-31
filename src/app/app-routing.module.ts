import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/Account/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'create-account',
    loadChildren: () => import('./modules/Account/create-account/create-account.module').then(m => m.CreateAccountModule)
  },
  {
    path: 'setup-profile',
    loadChildren: () => import('./modules/Profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./modules/Account/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        useHash: true,
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

