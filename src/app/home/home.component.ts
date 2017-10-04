import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/services/weather.service';
import { Conditions } from '../shared/models/conditions.model';
import 'rxjs/add/operator/mergeMap';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
	conditions: Conditions;
	loading = true;
	coords: any;
	wundergroundURL: string;

  	constructor(
		private weatherService: WeatherService
	  ) { }

  	ngOnInit() {
		this.weatherService.getCurrentLocation().flatMap(position => {
			this.coords = position.coords;
		});

		if(this.coords) {
			this.wundergroundURL = 'http://api.wunderground.com/api/181be5ba9f40a756/conditions/q/' + this.coords.latitude + ',' + this.coords.longitude + '.json';

			console.log('wundergroundURL',this.wundergroundURL);

			this.weatherService.getForecast(this.wundergroundURL).subscribe(res => {
				this.conditions = res;
				this.loading = false;
			});
		}
		

		

		
	}
	
}
