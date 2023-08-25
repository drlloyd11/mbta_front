import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusRoutsComponent } from './bus-routs.component';

describe('BusRoutsComponent', () => {
  let component: BusRoutsComponent;
  let fixture: ComponentFixture<BusRoutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusRoutsComponent]
    });
    fixture = TestBed.createComponent(BusRoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
