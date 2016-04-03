import {Component, OnInit} from 'angular2/core';

import {NgClass} from 'angular2/common';
import { User} from '../user';
import {UserService} from '../user.service';


@Component({

    selector: 'user-info',

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
	constructor(){}
	userlist: User;
}
			
/**
*
* build form next 
*/		