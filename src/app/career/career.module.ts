import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CareerRoutingModule } from './career-routing.module';
import { CareerComponent } from './career.component';
import { CultureComponent } from './culture/culture.component';
import { CurrentVacanciesComponent } from './current-vacancies/current-vacancies.component';
import { EmployeeStoriesComponent } from './employee-stories/employee-stories.component';
import { EmployeeVerificationComponent } from './employee-verification/employee-verification.component';
import { InternshipComponent } from './internship/internship.component';
import { DetailsComponent } from './culture/details/details.component';
import { EventsComponent } from './culture/events/events.component';
import { MapComponent } from './current-vacancies/map/map.component';
import { OpenPositionsComponent } from './current-vacancies/open-positions/open-positions.component';
import { VacancyCardComponent } from './current-vacancies/vacancy-card/vacancy-card.component';
import { RecruitmentStatusComponent } from './current-vacancies/recruitment-status/recruitment-status.component';
import { DomainCardComponent } from './internship/domain-card/domain-card.component';
import { BlogComponent } from './employee-stories/blog/blog.component';
import { AvatarComponent } from './employee-stories/avatar/avatar.component';

@NgModule({
  declarations: [CultureComponent, CurrentVacanciesComponent, EmployeeVerificationComponent, InternshipComponent,
                 EmployeeStoriesComponent, CareerComponent, DetailsComponent, EventsComponent, MapComponent, OpenPositionsComponent, VacancyCardComponent, RecruitmentStatusComponent, DomainCardComponent, BlogComponent, AvatarComponent],
  imports: [
    SharedModule,
    CareerRoutingModule,
  ],
  exports: [CareerComponent],
})
export class CareerModule { }
