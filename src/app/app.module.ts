import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ApiService} from './shared/services/api.service';
import { Logger} from './shared/services/logger.service';
import { WeatherService } from './shared/services/weather.service';
import { TenDayForecastComponent } from './10-day-forecast/10-day-forecast.component';

@NgModule({
  	declarations: [
    	AppComponent,
    	HomeComponent,
    	TenDayForecastComponent
  	],
  	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule
  	],
  	providers: [
		  ApiService,
		  Logger,
		  WeatherService
	],
  	bootstrap: [AppComponent]
})
export class AppModule { }
