import { Directive, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[mlTagClick]'
})
export class TagClickDirective {
	@Input() mlTagClick: any;

	constructor(
	) { }

	@HostListener('click') onClick() {
		const eventData = this.mlTagClick;
		//this.analyticsService.sendEvent(eventData.ec, eventData.ea, eventData.el, eventData.ev);
	}
}
