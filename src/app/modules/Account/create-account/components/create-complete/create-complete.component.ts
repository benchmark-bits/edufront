import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {LogOut} from '../../../../../shared/store/actions/Auth/auth.actions';
import {AppState} from '../../../../../shared/store/app.states';
import {PageDataService} from '../../../../../shared/services/page.data.service';
import {ErrorHandler} from '../../../../../shared/helpers/error-handler';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-create-complete',
  templateUrl: './create-complete.component.html',
  styleUrls: ['./create-complete.component.scss']
})

export class CreateCompleteComponent implements OnInit, OnDestroy{

  title: string;
  message: string;
  error: any = {};
  pageDataSubscription: Subscription;

  constructor(
    private store: Store<AppState>,
    private pageDataService: PageDataService,
    private errorHandler: ErrorHandler,
  ) {
  }

  ngOnInit(): void {
    this.accountCreatedMessage();
  }

  // logout user
  logOut(): void {
    this.store.dispatch(new LogOut());
  }

  // successful account creation message
  accountCreatedMessage() {
    this.pageDataSubscription = this.pageDataService.getAccountCreationMessage().subscribe(response => {
      this.title = response[0].title;
      this.message = response[0].content;
    }, (error) => {
      this.error = this.errorHandler.errorCallback(error);
    });
  }

  // unsubscribe observables
  ngOnDestroy(): void {
    this.pageDataSubscription.unsubscribe();
  }

}
