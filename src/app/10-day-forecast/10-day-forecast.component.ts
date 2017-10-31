import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/services/weather.service';
import { TenDayForecast, DailyForecast } from '../shared/models/10-day-forecast.model';
import { environment } from '../../environments/environment';

import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-10-day-forecast',
  templateUrl: './10-day-forecast.component.html',
  styleUrls: ['./10-day-forecast.component.scss']
})
export class TenDayForecastComponent implements OnInit {
	tenDayForecast: TenDayForecast;
	loading = true;
	weatherSubscriptions: Subscription;

	constructor(
		private weatherService: WeatherService
	  ) { }

  	ngOnInit() {

		// retrieve coords using html geolocation
		this.weatherSubscriptions = this.weatherService.getCurrentLocation().mergeMap(position => {
			
			// get wunderground url using returned coords
			let wundergroundURL = this.weatherService.getWundergroundAPIurl(position.coords, 'forecast10day', null);

			// retrieve forecast
			return this.weatherService.getCurrentTemp(wundergroundURL, '10-day');

		}).subscribe(res => {

			console.log('res', res);

			// set conditions
			this.tenDayForecast = res;

			// turn off loader
			this.loading = false;
		});
  	}
}
