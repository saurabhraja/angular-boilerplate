import { Component1Component } from './components/component1/component1.component';
import { Feature1Component } from './feature1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Feature1Component,
    children: [
      {
        path: 'component1',
        component: Component1Component
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature1RoutingModule { }
