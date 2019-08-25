import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GeoData} from './geoData'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
 private _url:string ="/assets/data/geoData.json";
  constructor(private http:HttpClient) {
  }
  //access the geograpic data
  getGeoGraphicData() : Observable<GeoData>{
    return this.http.get<GeoData>(this._url);
 }
}