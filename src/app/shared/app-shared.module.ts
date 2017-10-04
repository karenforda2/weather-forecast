import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// directives
import { TagClickDirective } from './directives/tag-click.directive';
import { ClickOutsideDirective } from './directives/click-outside.directive';

// components

// pipes


// providers

// modules
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HttpModule,
		ReactiveFormsModule,
		RouterModule
	],
	providers: [
	],
	declarations: [
		// directives
		TagClickDirective,
		ClickOutsideDirective,

		// components


		// pipes

	],
	exports: [
		// modules
		CommonModule,
		FormsModule,
		HttpModule,
		ReactiveFormsModule,
		RouterModule,

		// directives
		TagClickDirective,
		ClickOutsideDirective

		// components

		// pipes
	]
})

export class AppSharedModule { }
