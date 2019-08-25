import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeolocationService } from './geolocation.service';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import {DataTablesModule} from "angular-datatables";

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [GeolocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
