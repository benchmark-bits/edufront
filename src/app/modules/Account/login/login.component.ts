import {Component, OnInit, OnDestroy, ChangeDetectionStrategy} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState, selectAuthState } from '../../../shared/store/app.states';
import { LogIn } from '../../../shared/store/actions/Auth/auth.actions';
import { ValidationMessageService } from '../../../shared/services/validation.message.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ErrorHandler } from '../../../shared/helpers/error-handler';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  validationMessage: object;
  getState: Observable<any>;
  // alert message
  error: any = {};
  hidePassword: boolean;
  isAuthenticated: false;
  user: any;
  validationMessageSubscription: Subscription;
  getStateSubscription: Subscription;
  isSubmitting: boolean;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private validationMessageService: ValidationMessageService,
    private router: Router,
    private errorHandler: ErrorHandler,
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.createLoginForm();
    this.getStoreState();
    this.error = {};
  }
  // create Login Form
  createLoginForm() {
    this.hidePassword = true;
    this.loginForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{1,}[.]{1}[a-zA-Z]{1,}')]],
        password: ['', [Validators.required]],
      }
    );
    this.getValidationMessage();
  }

  // get validation messages
  getValidationMessage() {
    this.validationMessageSubscription = this.validationMessageService.loginValidationMessage().subscribe(response => {
      this.validationMessage = response[0].messages;
    }, (error) => { this.error = this.errorHandler.errorCallback(error); });
  }

  getStoreState() {
    this.getStateSubscription = this.getState.subscribe((state) => {
      this.isSubmitting = false;
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
      if (!this.isAuthenticated) {
        this.error.type = 'danger';
        this.error.isAlert = true;
        this.error.message = state.errorMessage && state.errorMessage.type && 'Something went wrong.' || state.errorMessage;
        window.scrollTo(0, 0);
      }
      if (this.isAuthenticated) {
        this.loginForm.reset();
      }
    });
  }

  // Mark controls of form as touched.
  markControlsAsTouched(formRef: FormGroup) {
    for (const property in formRef.controls) {
      if (property) {
        formRef.controls[property].markAsTouched();
      }
    }
    window.scroll(0, 0);
  }

  // submit login form
  onSubmit(): void {
    if (this.loginForm.status === 'VALID') {
      const payload = {
        email: this.loginForm.value.username,
        password: this.loginForm.value.password
      };

      this.error = {};
      this.isSubmitting = true;
      this.store.dispatch(new LogIn(payload));
    }
    else {
      this.markControlsAsTouched(this.loginForm);
    }
  }

  // unsubscribe observables
  ngOnDestroy(): void {
    this.validationMessageSubscription.unsubscribe();
    this.getStateSubscription.unsubscribe();
  }
}
