import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactComponent } from './contact-us/contact/contact.component';
import { DetailsComponent } from './contact-us/details/details.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuItemsComponent } from './header/menu-items/menu-items.component';

@NgModule({
  declarations: [HeaderComponent, MenuItemsComponent, ContactUsComponent, DetailsComponent, ContactComponent, FooterComponent],
  imports: [
    SharedModule,
  ],
  exports: [HeaderComponent, ContactUsComponent, FooterComponent],
})
export class CoreModule { }
