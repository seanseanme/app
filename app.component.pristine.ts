import {Component,provide} from 'angular2/core';

import {NgClass} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import { User} from './user';
import {UserService} from './user.service';
import {UserData}  from './user-data';
import {XHRBackend}        from 'angular2/http';

// in-memory web api imports
import {InMemoryBackendService,
        SEED_DATA}         from 'a2-in-memory-web-api/core';
import {UserData}          from '../user-data';

@Component({

    selector: 'my-app',

/**    template:`
*<h1> my first angular2 app</h1>

*<h1>{{title}}</h1>
*`,
*/
templateUrl:'app/displayboard.html',
styleUrls: ['app/dashboard.component.css'],

directives:[NgClass],
  providers: [
    HTTP_PROVIDERS,
    
 UserService,
  
 provide(XHRBackend, { useClass: InMemoryBackendService }),
 provide(SEED_DATA,  { useClass: UserData }) 
]
})

export class AppComponent implements OnInit {
	constructor(private _userservice:UserService){}
	
	getUsers(){
		this._userservice.getUsers()
		.subscribe(
		  users => this.userlist=users,
		  error => this.errorMessage=<any>error);
    	}

	addUser (name: string) {
  		if (!name) {return;}
  		this._userservice.addUser(name)
                   .subscribe(
                     user  => this.userlist.push(user),
                     error =>  this.errorMessage = <any>error);
	}

	ngOnInit(){
		this.getUsers();
	}

 
	title="Im so stinky ~ Quinn ";

	public user: User = {

		name: 'Sean',

		delay: 5,

		status:"nil",
	

	};


	bulletin='';

	
	isontime(delay){

		if (delay<6){

		this.onTime=true;

		this.superdelayed=false;

		this.delayed=false;

		this.bulletin= "on Time!";

		}
		
	else if (delay>5 && delay<15){

		this.delayed=true;

		this.onTime=false;

		this.superdelayed=false;

		this.bulletin=delay + " minutes behind! ack!";

		}

	else if (delay>15){

		this.superdelayed=true;

		this.onTime=false;

		this.delayed=false;

		this.bulletin=delay + " minutes behind! sorry!";

		}

}



	personisontime(person,delay){

	if (delay<6)
		{

		person.onTime=true;

		person.superdelayed=false;

		person.delayed=false;

		person.status= "on Time!";

		}
		
	else if (delay>5 && delay<15)
		{

		person.delayed=true;

		person.onTime=false;

		person.superdelayed=false;

		person.status=delay + " minutes behind! ack!";

		}

	else if (delay>15)
		{

		person.superdelayed=true;

		person.onTime=false;

		person.delayed=false;

		person.status=delay + " minutes behind! sorry!";

		
}

	
}
}
	