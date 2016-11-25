/**
 * Created by Паша on 10.11.2016.
 */
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { User } from '../model/user';
import { Headers, Http} from '@angular/http';

@Injectable()
export class UsersService{

    private usersUrl = 'api/users';
    private headers = new Headers({'Content-Type' : 'application/json'});

    constructor(private http: Http){}

    read(id: string): Promise<User> {
        return this.http.get(this.usersUrl + '/' + id)
            .toPromise()
            .then(responce => responce.json())
            .catch(this.handleError);
    }

    update(user: User): Promise<User>{
        const url = `${this.usersUrl}/${user._id}`;
        return this.http
            .put(url, JSON.stringify(user), {headers: this.headers})
            .toPromise()
            .then(()=>user)
            .catch(this.handleError);
    }

    create(user: User): Promise<User>{
        return this.http
            .post(this.usersUrl, JSON.stringify(user), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    delete(id: string): Promise<void>{
        const url = `${this.usersUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(()=>null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any>{
        return Promise.reject(error.message || error);
    }
}