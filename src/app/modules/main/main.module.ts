import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';

/** Components */
import { MainComponent } from './main.component';
import { ProfileComponent } from 'src/app/components/profile/profile.component';


@NgModule({
  declarations: [
    MainComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
  ]
})
export class MainModule { }
