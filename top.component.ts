import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { Component }       from 'angular2/core';

@Component({
  selector: 'my-top',
template: `
  <h1>{{title}}</h1>
  <a [routerLink]="['Heroes']">Heroes</a>
  <router-outlet></router-outlet>
`,
directives: [ROUTER_DIRECTIVES],
providers: [
  ROUTER_PROVIDERS,
  UserService
]
})
@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  }
])
export class TopComponent implements OnInit {
	title = 'Tour of Heroes';

}