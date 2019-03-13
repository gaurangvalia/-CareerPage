import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeVerificationComponent } from './employee-verification.component';

describe('EmployeeVerificationComponent', () => {
  let component: EmployeeVerificationComponent;
  let fixture: ComponentFixture<EmployeeVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
