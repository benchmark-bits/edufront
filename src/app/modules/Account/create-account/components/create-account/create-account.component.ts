import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {SignUp} from '../../../../../shared/store/actions/Auth/auth.actions';
import {AppState, selectAuthState} from '../../../../../shared/store/app.states';
import {Observable, Subscription} from 'rxjs';
import {ValidationMessageService} from '../../../../../shared/services/validation.message.service';
import {PageDataService} from '../../../../../shared/services/page.data.service';
import {ErrorHandler} from '../../../../../shared/helpers/error-handler';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateAccountComponent implements OnInit, OnDestroy {

  termsOfServicesModal: boolean;
  privacyPolicyModal: boolean;
  termsOfServicesTitle: string;
  privacyPolicyTitle: string;
  termsOfServices: string;
  privacyPolicy: string;

  // alert message
  error: any = {};

  registerForm: FormGroup;
  validationMessage: object;
  hidePassword: boolean;
  hideConfirmPassword: boolean;
  user = null;
  getState: Observable<any>;
  isAuthenticated: false;
  validationMessageSubscription: Subscription;
  storeSubscription: Subscription;
  serviceTermsSubscription: Subscription;
  privacyPolicySubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private validationMessageService: ValidationMessageService,
    private pageDataService: PageDataService,
    private store: Store<AppState>,
    private errorHandler: ErrorHandler,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.createForm();
    this.getStoreState();
    this.error = {};
  }

  // create account form
  createForm() {
    this.hidePassword = true;
    this.hideConfirmPassword = true;
    this.registerForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{1,}[.]{1}[a-zA-Z]{1,}')]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9@$!%*#?&]+$')]],
        confirmPassword: ['', Validators.required],
      }, { validator: this.comparePassword }
    );
    this.getValidationMessage();
  }

  // compare password and confirm password
  comparePassword(group: FormGroup) {
    const pass = group.controls.password;
    const confirmPass = group.controls.confirmPassword;
    if ((pass.valid && confirmPass.valid) && (pass.value !== confirmPass.value)) {
      return { passwordNotSame: true };
    } else {
      return null;
    }
  }

  // get validation messages
  getValidationMessage() {
    this.validationMessageSubscription = this.validationMessageService.signupValidationMessage().subscribe(response => {
      this.validationMessage = response[0].messages;
    }, (error) => {
      this.error = this.errorHandler.errorCallback(error);
    });
  }

  // create account form submit
  submit() {
    if (this.registerForm.status === 'VALID') {
      const payload = {
        email: this.registerForm.value.email,
        password: this.registerForm.value.password
      };
      try {
        this.error = {};
        this.store.dispatch(new SignUp(payload));
      } catch (error) { this.error = this.errorHandler.errorCallback(error); }
    } else {
      this.markControlsAsTouched(this.registerForm);
    }

  }

  // get store state
  getStoreState() {
    this.storeSubscription = this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
      this.error.message = state.errorMessage;
      if (this.user === null) {
        this.error.type = 'danger';
      }
      if (this.isAuthenticated) {
        this.registerForm.reset();
        this.router.navigate(['/create-account/create-complete']).then();
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

  // on click open & close function for terms of services modal window
  openTermsOfServicesModal() {
    this.termsOfServicesModal = false;
    this.serviceTermsSubscription = this.pageDataService.getServiceTerms().subscribe(response => {
      this.termsOfServicesTitle = response[0].title;
      this.termsOfServices = response[0].content;
      this.termsOfServicesModal = true;
      this.cd.detectChanges();
    }, (error) => { this.error = this.errorHandler.errorCallback(error); });
  }

  // on click open & close function for privacy policy modal window
  openPrivacyPolicyModal() {
    this.privacyPolicyModal = false;
    this.privacyPolicySubscription = this.pageDataService.getPrivacyPolicy().subscribe(response => {
      this.privacyPolicyTitle = response[0].title;
      this.privacyPolicy = response[0].content;
      this.privacyPolicyModal = true;
      this.cd.detectChanges();
    }, (error) => { this.error = this.errorHandler.errorCallback(error); });
  }

  // unsubscribe observables
  ngOnDestroy(): void {
    this.validationMessageSubscription.unsubscribe();
    if (this.serviceTermsSubscription) {
      this.serviceTermsSubscription.unsubscribe();
    }
    if (this.privacyPolicySubscription) {
      this.privacyPolicySubscription.unsubscribe();
    }
    this.storeSubscription.unsubscribe();
  }

}
