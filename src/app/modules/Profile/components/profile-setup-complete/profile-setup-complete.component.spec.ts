import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSetupCompleteComponent } from './profile-setup-complete.component';

describe('ProfileSetupCompleteComponent', () => {
  let component: ProfileSetupCompleteComponent;
  let fixture: ComponentFixture<ProfileSetupCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSetupCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSetupCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
