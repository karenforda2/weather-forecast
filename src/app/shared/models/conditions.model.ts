export class Conditions {
	currentObservation: CurrentObservation;
	error: Error;

	constructor(
		parent
	) {
		if(parent !== null) {
			this.currentObservation = parent.current_observation !== undefined ? new CurrentObservation(parent.current_observation) : null;
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

export class CurrentObservation {
	temp: number;
	location: string;

	constructor(
		parent
	) {
		if(parent !== null) {
			this.temp = parent.temp_f;
			this.location = parent.display_location.full;
		}
	}
}
