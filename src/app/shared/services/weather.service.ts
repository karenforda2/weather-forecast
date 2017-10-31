import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Conditions } from '../models/conditions.model';
import { TenDayForecast } from '../models/10-day-forecast.model';
import { ApiService } from './api.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class WeatherService {
	position: Position;

	constructor(
		private apiService: ApiService
	) { }

  	setConditions(data): Conditions {
		if(data){
			return new Conditions(data);
		} else{
			return new Conditions(null);
		}	
	}

	setTenDayForecast(data): TenDayForecast {
		if(data){
			return new TenDayForecast(data);
		} else{
			return new TenDayForecast(null);
		}	
	}

	getWundergroundAPIurl(coords: Coordinates = null, feature: string, zipCode: string = null): string {
		if(coords) {
			return `http://api.wunderground.com/api/${environment.wundergroundAPIkey}/${feature}/q/${coords.latitude},${coords.longitude}.json`;
		} else if(zipCode) {
			return `http://api.wunderground.com/api/${environment.wundergroundAPIkey}/${feature}/q/${zipCode}.json`;
		}
	}

	getCurrentTemp(url: string, dataType: string): Observable<any> {
		return this.apiService.get(url).map(data => {
			console.log('data',data);

			if(dataType === 'conditions') {
				return this.setConditions(data);
			} else if(dataType === '10-day'){
				return this.setTenDayForecast(data);
			} 
		});
	}
	
	getCurrentLocation() {
		return Observable.create(observer => {

			// check for cached result
			if(!this.position) {
				
				// if html5 geoloation is available
				if(window.navigator && window.navigator.geolocation) {
					window.navigator.geolocation.getCurrentPosition(
						(position) => {

							// populate the global variable to pull from later
							this.position = position;

							// fill the observable
							observer.next(position);
							observer.complete();
						},
						(error) => observer.error(error)
					);
				} else {
					observer.error('Unsupported Browser');
					// TODO:  Fallback to something else?
				}
			} else {
				// fill the observable
				observer.next(this.position);
				observer.complete();
			}
		});	
	}		
}
