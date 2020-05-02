import { EnvironmentConfigService } from './environment-config.service';
import { AppConstants } from './app-shared/constants/app.constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-boilerplate';

  constructor(private envConfigService: EnvironmentConfigService) {}

  ngOnInit(): void {
    console.log("APPLICATION INITIALISED");
    AppConstants["apiUrl"] = this.envConfigService.getApiURL();
  }
}
