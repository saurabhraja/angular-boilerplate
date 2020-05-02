import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentConfigService {
  private configJsonURL: string;
  private apiURL: string;

  constructor(private _http: HttpClient) { 
    this.initialise();
  }

  initialise() {
    this.configJsonURL = "assets/json/environment-config.json";
  }
  loadApiURL() {
    return this._http.get(this.configJsonURL)
      .toPromise()
      .then(response => {
        this.apiURL = response["apiURL"];
        console.log("BEFORE APPLICATION INITIALIZATION");
        console.log("API BASE URL: " + this.apiURL);
      });
  }
  getApiURL() {
    return this.apiURL;
  }
}
