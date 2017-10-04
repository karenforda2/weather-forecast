import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Conditions } from '../models/conditions.model';
import { ApiService } from './api.service';


@Injectable()
export class WeatherService {

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

	getForecast(url): Observable<Conditions> {
		return this.apiService.get(url).map(data => this.setConditions(data));
	}
	
	getCurrentLocation() {
		return Observable.create(observer => {
			if(window.navigator && window.navigator.geolocation) {
				window.navigator.geolocation.getCurrentPosition(
					(position) => {
						observer.next(position);
						observer.complete();
					},
					(error) => observer.error(error)
				);
			} else {
				observer.error('Unsupported Browser');
			}
		});
	}		
}
