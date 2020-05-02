import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature2Component } from './feature2.component';
import { AppSharedModule } from 'src/app/app-shared/app-shared.module';
import { Feature2RoutingModule } from './feature2-routing.module';

@NgModule({
  declarations: [Feature2Component],
  imports: [
    CommonModule,
    AppSharedModule,
    Feature2RoutingModule
  ]
})
export class Feature2Module { }
