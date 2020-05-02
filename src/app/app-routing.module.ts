import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'feature1',
    loadChildren: () => import('./app-features/feature1/feature1.module')
      .then(m => m.Feature1Module)
  },
  {
    path: 'feature2',
    loadChildren: () => import('./app-features/feature2/feature2.module')
      .then(m => m.Feature2Module)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'feature1'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
