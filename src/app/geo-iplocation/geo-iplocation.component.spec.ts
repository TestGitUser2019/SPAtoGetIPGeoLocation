import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoIPLocationComponent } from './geo-iplocation.component';

describe('GeoIPLocationComponent', () => {
  let component: GeoIPLocationComponent;
  let fixture: ComponentFixture<GeoIPLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoIPLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoIPLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
