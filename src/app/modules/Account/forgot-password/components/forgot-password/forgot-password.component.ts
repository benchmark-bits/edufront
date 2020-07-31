import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnInit {

  sentMessage = false;
  forgotPasswordForm = true;

  constructor() { }

  ngOnInit(): void {
  }

  sentEmailMessage() {
    this.sentMessage = true;
    this.forgotPasswordForm = false;
  }

}
