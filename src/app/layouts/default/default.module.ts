import { MaterialModule } from './../../material/material.module';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule,
  ]
})
export class DefaultModule { }
