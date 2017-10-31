import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from 'app/home/home.component';
import { TenDayForecastComponent } from 'app/10-day-forecast/10-day-forecast.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent},
	{ path: '10-day', component: TenDayForecastComponent},
    { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
