import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import { resturants } from '../resturant.model';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  URL='./assets/data-source.json';
private _http:HttpClient;
  constructor(http:HttpClient) {
    this._http=http;
   }
  readJsonData(){
    return this._http.get<resturants[]>(this.URL);
  }
 
}
