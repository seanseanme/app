import {Component, OnInit} from 'angular2/core';

import {NgClass} from 'angular2/common';
import { User} from '../user';
import {UserService} from '../user.service';

@Component({

    selector: 'my-app',

/**    template:`
*<h1> my first angular2 app</h1>

*<h1>{{title}}</h1>
*`,
*/
templateUrl:'app/userinfo/user-info.html',
styleUrls: [],

directives:[NgClass],
providers: [UserService],
})

export class UserInfoComponent implements OnInit {
	constructor(private _userservice:UserService){}
	userlist: User;
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

	ngOnInit(){	}
}
					