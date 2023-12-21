import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    HttpClientModule,
    FormsModule,

    ReactiveFormsModule,

    CommonModule,
    DashboardRoutingModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class DashboardModule {}
