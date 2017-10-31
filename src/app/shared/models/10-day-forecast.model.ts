export class TenDayForecast {
	dailyForecast: Array<DailyForecast> = new Array<DailyForecast>();
	error: Error;

	constructor(
		parent
	) {
		if(parent !== null) {
			this.dailyForecast = parent.forecast.simpleforecast.forecastday.map(forecast => {
				return new DailyForecast(forecast);
			});
	
			this.error = parent.response.error !== undefined ? new Error(parent.response.error) : null;
		}
	}
}

export class Error { 
	description: string;

	constructor(
		parent
	) {
		this.description = parent.description;
	}
}

export class DailyForecast {
	forecastDate: Date;
	lowTemp: string;
	highTemp: string;
	forecastIcon: string;

	constructor(
		parent
	) {
		if(parent !== null) {
			this.forecastDate = new Date(parent.date.epoch);
			this.lowTemp = parent.low.fahrenheit;
			this.highTemp = parent.high.fahrenheit;
			this.forecastIcon = parent.icon_url;
		}
	}
}
