import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';

@Component({
    selector: 'my-app',
    template: `
<h1> my first angular2 app</h1>

<h1>{{title}}</h1>
{{user.name}}
<input type="number" [(ngModel)]="user.delay" (keyup)=isontime(user.delay)>
{{user.delay}}

<div class="bb" [ngClass]="{isgreen: onTime, isyellow: delayed, isred: superdelayed}"> Sean is {{bulletin}}</div>

`,


styles:[`
 
   .isgreen {
 
     background-color: lightgreen;

   }
   
   .isyellow {

     background-color: yellow;
   
   }

   .isred {

     background-color: pink;
   
   }

`],

directives:[NgClass]


})
/**'app/bulletin.template.html' */
export class AppComponent { 
	title="Im so stinky ~ Quinn ";
	public user: User = {
		name: 'Sean',
		delay: 5,
	}

	};
bulletin='';	

isontime(delay){
	if (delay<6){

		this.onTime=true;

		this.superdelayed=false;

		this.delayed=false;

		this.bulletin= "on Time!";

		}
;		
	else if (delay>5 && delay<15){

		this.delayed=true;

		this.onTime=false;

		this.superdelayed=false;

		this.bulletin=delay + " minutes behind! ack!";

		}
;		
	else if (delay>15){

		this.superdelayed=true;

		this.onTime=false;

		this.delayed=false;

		this.bulletin=delay + " minutes behind! sorry!";

		}

;
};

/** shouldnt matter */

interface User{
	name: string;
	delay: number;
};


