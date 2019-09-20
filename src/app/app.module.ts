import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {GeoIPServiceService} from './geo-ipservice.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeoIPLocationComponent } from './geo-iplocation/geo-iplocation.component';
import {HttpClientModule} from '@angular/common/http';
import { KeyValuePipe } from './key-value.pipe'

@NgModule({
  declarations: [
    AppComponent,
    GeoIPLocationComponent,
    KeyValuePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GeoIPServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
