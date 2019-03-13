import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentVacanciesComponent } from './current-vacancies.component';

describe('CurrentVacanciesComponent', () => {
  let component: CurrentVacanciesComponent;
  let fixture: ComponentFixture<CurrentVacanciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentVacanciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
