import {Injectable} from 'angular2/core';
import {Users} from './mockUser';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable}  from 'rxjs/Observable';

@Injectable()
export class UserService{
	constructor(private http: Http){}
	private _usersUrl='app/users';
//mockUserjson.json
	getUsers()
	{
		return this.http.get(this._usersUrl)
			.map(res => <User[]> res.json().data)
			.catch(this.handleError);
	}
	
	private handleError (error: Response) {
 
		console.error(error);
    
		return Observable.throw(error.json().error || 'Server error');
 
	 }
	/** getUser(id:number){
	return Promise.resolve(USERS).then( users=> users.filter(user => user.id ===id)[0]);
	};**/

	addUser (name: string) : Observable<User>  {

	    let body = JSON.stringify({ name });
    	    let headers = new Headers({ 'Content-Type': 'application/json' });
    	    let options = new RequestOptions({ headers: headers });

	    return this.http.post(this._usersUrl, body, options)
                    .map(res =>  <User> res.json().data)
                    .catch(this.handleError)
  }	
}