import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature1Component } from './feature1.component';
import { AppSharedModule } from 'src/app/app-shared/app-shared.module';
import { Feature1RoutingModule } from './feature1-routing.module';

@NgModule({
  declarations: [Feature1Component],
  imports: [
    CommonModule,
    AppSharedModule,
    Feature1RoutingModule
  ]
})
export class Feature1Module { }
