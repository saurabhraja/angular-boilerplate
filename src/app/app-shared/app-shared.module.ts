import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppSharedModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppSharedModule,
      providers: []
    }
  }
}
