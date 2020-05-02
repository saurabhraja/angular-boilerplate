import { AppConstants } from './../../app-shared/constants/app.constants';
import { EnvironmentConfigService } from './../../environment-config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature1',
  templateUrl: './feature1.component.html',
  styleUrls: ['./feature1.component.css']
})
export class Feature1Component implements OnInit {

  constructor(private envConfigService: EnvironmentConfigService) { }

  ngOnInit(): void {
  }
  callAPI() {
    console.log("FEATURE 1");
    console.log("API BASE URL: " + AppConstants["apiUrl"]);
  }
}
