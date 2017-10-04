export class WeatherError {
	description: string;

	constructor(
		parent
	) {
		this.description = parent.description !== null ? parent.description : null;
	}
}
