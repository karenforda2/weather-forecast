import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/services/weather.service';
import { Conditions } from '../shared/models/conditions.model';
import { environment } from '../../environments/environment';

import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/mergeMap';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
	conditions: Conditions;
	loading = true;
	weatherSubscriptions: Subscription;

  	constructor(
		private weatherService: WeatherService
	  ) { }

  	ngOnInit() {

		// retrieve coords using html geolocation
		this.weatherSubscriptions = this.weatherService.getCurrentLocation().mergeMap(position => {

			// get wunderground url using returned coords
			let wundergroundURL = this.weatherService.getWundergroundAPIurl(position.coords, 'conditions');

			// retrieve forecast
			return this.weatherService.getCurrentTemp(wundergroundURL);

		}).subscribe(res => {

			// set conditions
			this.conditions = res;

			// turn off loader
			this.loading = false;
		});
	}

	ngOnDestroy(): void{
        this.weatherSubscriptions.unsubscribe();
    }
}
