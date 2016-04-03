import { Component,provide}       from 'angular2/core';
import { UserService }     from './user.service';
import { User} from './user';
import {UserData}          from '../user-data';
import {DummyComponent} from './dummy.component';
import {DashboardComponent} from './dashboard.component';
import {UserInfoComponent} from './userinfo/user-info.component';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

 @Component({
      selector: 'my-app',
      template: `
        <h1>{{title}}</h1>
        <h2>routing here!</h2>
	<a [routerLink]="['Dashboard']">Dashboardlink </a>
	<a [routerLink]="['UserInfo']">UserInfo</a>
	<router-outlet></router-outlet>
      `,
      directives: [DummyComponent, DashboardComponent, UserInfoComponent, ROUTER_DIRECTIVES],
      providers: [
  ROUTER_PROVIDERS,
  UserService
      ]
    })
@RouteConfig([
	{
	path:'/dash',
	name:'Dashboard',
	component: DashboardComponent
	},
	{
	path:'/user',
	name: 'UserInfo',
	component: UserInfoComponent
	}
])
export class TopComponent {
      title = 'Tour of Heroes';
    }

/**works with dummy component**/