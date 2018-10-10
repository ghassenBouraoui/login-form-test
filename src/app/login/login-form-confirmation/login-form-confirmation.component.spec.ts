import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormConfirmationComponent } from './login-form-confirmation.component';

describe('LoginFormConfirmationComponent', () => {
  let component: LoginFormConfirmationComponent;
  let fixture: ComponentFixture<LoginFormConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
