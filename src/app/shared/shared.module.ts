import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [LogoComponent, BannerComponent],
  imports: [
    CommonModule,
  ],
  exports: [LogoComponent, BannerComponent],
})
export class SharedModule { }
