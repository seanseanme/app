import { Component,provide}       from 'angular2/core';

import { UserService }     from './user.service';
import { User} from './user';
import {UserData}          from '../user-data';
import {DummyComponent} from './dummy.component';
import {DashboardComponent} from './dashboard.component';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

 @Component({
      selector: 'my-app',
      template: `
        <h1>{{title}}</h1>
        <h2>routing here!</h2>
	<a [routerLink]="['Dummy']">Dummylink </a>
	 <router-outlet></router-outlet>
	<my-dashboard></my-dashboard>
	<my-dash></my-dash>
      `,
      directives: [DummyComponent, DashboardComponent, ROUTER_DIRECTIVES],
      providers: [
  ROUTER_PROVIDERS,
  UserService
      ]
    })
@RouteConfig([
	{
	path:'/dummy',
	name:'Dummy',
	component: DashboardComponent
	}
])
export class TopComponent {
      title = 'Tour of Heroes';
    }

/**works with dummy component**/