import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';


import { environment } from 'environments/environment';
import { Logger } from './logger.service';

const defaultHeaders = {
	'Content-Type': 'application/json',
	'Accept': 'application/json'
};

@Injectable()
export class ApiService {
	constructor(
		private http: Http,
		private logger: Logger
	) { }


	private formatErrors(error: any) {
		return Observable.throw(error.json());
	}
	
	get(url: string): Observable<any> {
		return this.http.get(url)
		.catch(this.formatErrors)
		.map((res: Response) => res.json());
	}
}
