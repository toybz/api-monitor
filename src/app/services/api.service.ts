import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL = "https://flw-api-health-endpoints.herokuapp.com/api/"

  constructor(private http: HttpClient) { }

  getApiStatus(apiCategory: string){

    let url = this.BASE_URL + apiCategory

    return this.http.get(url);

}


}
