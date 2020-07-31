import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompleteComponent } from './create-complete.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {initialState} from '../../../../../shared/store/reducers/Auth/auth-reducer';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ErrorHandler} from '../../../../../shared/helpers/error-handler';

describe('CreateCompleteComponent', () => {
  let component: CreateCompleteComponent;
  let fixture: ComponentFixture<CreateCompleteComponent>;
  let store: MockStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCompleteComponent ],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
      providers: [
        ErrorHandler,
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
