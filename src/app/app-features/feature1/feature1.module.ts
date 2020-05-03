import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature1Component } from './feature1.component';
import { AppSharedModule } from 'src/app/app-shared/app-shared.module';
import { Feature1RoutingModule } from './feature1-routing.module';
import { Component1Component } from './components/component1/component1.component';

@NgModule({
  declarations: [Feature1Component, Component1Component],
  imports: [
    CommonModule,
    AppSharedModule,
    Feature1RoutingModule
  ]
})
export class Feature1Module { }
