import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastDetailedComponent } from './forecast-detailed.component';

describe('ForecastDetailedComponent', () => {
  let component: ForecastDetailedComponent;
  let fixture: ComponentFixture<ForecastDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastDetailedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
