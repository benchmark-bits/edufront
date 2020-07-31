import { Input, Directive, HostListener, ElementRef, Renderer2, OnChanges } from '@angular/core';
import { ValidationEmailService } from '../services/validation.email.service';

@Directive({
  selector: '[appEmailChecker]'
})
export class EmailCheckerDirective implements OnChanges {

  userEmailIds;
  @Input() public input: string;

  constructor(private renderer: Renderer2, private el: ElementRef, private emailService: ValidationEmailService) {

    this.emailService.getAllEmailIds().subscribe(data => {
      this.userEmailIds = data;
    });
  }

  @HostListener('keyup') ngOnChanges() {

    const status = (this.userEmailIds.some(x => x.email === this.el.nativeElement.value));

    if (status) {
      this.renderer.removeClass(this.el.nativeElement, 'ng-valid');
      this.renderer.addClass(this.el.nativeElement, 'ng-invalid');
      this.renderer.addClass(this.el.nativeElement, 'email-exists');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'ng-invalid');
      this.renderer.addClass(this.el.nativeElement, 'ng-valid');
      this.renderer.removeClass(this.el.nativeElement, 'email-exists');
    }
  }
}

