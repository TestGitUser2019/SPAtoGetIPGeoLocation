import { Component, OnInit } from '@angular/core';
import {GeoIPServiceService} from '../geo-ipservice.service'

@Component({
  selector: 'app-geo-iplocation',
  templateUrl: './geo-iplocation.component.html',
  styleUrls: ['./geo-iplocation.component.css']
})
export class GeoIPLocationComponent implements OnInit {
  IpAddress:string;
  constructor(private geoIPServiceService:GeoIPServiceService) { }
  GeoLocationDetails:any;
  InvalidIP:boolean=false;
  ngOnInit() {
  }

  GetGeoIPDetails()
  {
    this.geoIPServiceService.GetGeoIPinformatiom(this.IpAddress)
    .subscribe((res: any) => {  
      this.GeoLocationDetails=res;
      if(this.GeoLocationDetails.latitude==null)
      {
        this.GeoLocationDetails=null;
        this.InvalidIP=true;
      }
      else{
        this.InvalidIP=false;
      }
      console.log(this.GeoLocationDetails);
    }
    );
  }
  isObject(val) { return typeof val === 'object'; }
}
