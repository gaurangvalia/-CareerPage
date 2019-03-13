import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeStoriesComponent } from './employee-stories.component';

describe('EmployeeStoriesComponent', () => {
  let component: EmployeeStoriesComponent;
  let fixture: ComponentFixture<EmployeeStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
