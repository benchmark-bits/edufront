import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {reducers} from './shared/store/app.states';
import {AuthEffects} from './shared/store/effects/Auth/auth.effects';
import {AuthService} from './shared/services/auth.service';
import {EffectsModule} from '@ngrx/effects';
import {HelperModule} from './shared/helpers/helper.module';
import {ErrorHandler} from './shared/helpers/error-handler';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HelperModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthEffects])
  ],
  providers: [AuthService, ErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }

