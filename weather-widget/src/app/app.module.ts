import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForecastOverviewComponent } from './forecast-overview/forecast-overview.component';
import { ForecastDetailedComponent } from './forecast-detailed/forecast-detailed.component';

@NgModule({
  declarations: [
    AppComponent,
    ForecastOverviewComponent,
    ForecastDetailedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
