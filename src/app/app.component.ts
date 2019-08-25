import { Component, OnInit, } from '@angular/core';
import { GeolocationService } from './geolocation.service';
import { GeoData } from './geoData';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  geoGraphicData: GeoData[] = [];

  constructor(private _geoData: GeolocationService) {
  }

  ngOnInit() {
    this._geoData.getGeoGraphicData().subscribe(
      data => {
        let keyArr: any[] = Object.keys(data);
        keyArr.forEach((key: any) => {
          this.geoGraphicData.push(...data[key]); //used spread operator to combine array of object
        });
      }
    );
  }
  //set the color as per condition
  colorGreen = function (speed) {
    if (speed > 5 && speed < 20 && speed < 10) {
      return 'red';
    } else if (speed > 10 && speed < 20) {
      return 'green';
    } else if (speed > 20) {
      return 'yellow';
    } else {
      return 'black'
    }
  }
}

