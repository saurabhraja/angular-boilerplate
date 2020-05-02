import { Feature1Module } from './app-features/feature1/feature1.module';
import { EnvironmentConfigService } from './environment-config.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppSharedModule } from './app-shared/app-shared.module';

const EnvConfig = (envConfigService: EnvironmentConfigService) => {
  return() => {
    return envConfigService.loadApiURL();
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppSharedModule.forRoot(),
    Feature1Module
  ],
  providers: [
    EnvironmentConfigService,
    {
      provide: APP_INITIALIZER, 
      useFactory: EnvConfig,
      multi: true,
      deps: [EnvironmentConfigService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
