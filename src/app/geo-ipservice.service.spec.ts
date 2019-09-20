import { TestBed } from '@angular/core/testing';

import { GeoIPServiceService } from './geo-ipservice.service';

describe('GeoIPServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeoIPServiceService = TestBed.get(GeoIPServiceService);
    expect(service).toBeTruthy();
  });
});
