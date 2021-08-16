import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';

/** Components */
import { MainComponent } from './main.component';
import { ProfileComponent } from 'src/app/components/profile/profile.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { RegisterComponent } from '../../components/register/register.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';


@NgModule({
  declarations: [
    MainComponent,
    ProfileComponent,
    DashboardComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE, useValue: 'en-GB'
    }
  ]
})
export class MainModule { }
