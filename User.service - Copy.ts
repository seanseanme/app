import {Injectable} from 'angular2/core';
import {Users} from './mockUser';


@Injectable()
export class UserService{
	getUsers(){
	return Promise.resolve(Users);
	}
	/** getUser(id:number){
	return Promise.resolve(USERS).then( users=> users.filter(user => user.id ===id)[0]);
	};**/
}