/**
 * Created by Паша on 16.12.2016.
 */
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http} from '@angular/http';
import {User} from "../model/user";

@Injectable()
export class OnlineUsersService{

    private url = 'api/onlineusers';
    private headers = new Headers({'Content-Type' : 'application/json'});

    constructor(private http: Http){}

    getOnlineUsers(): Promise<User[]>{
        return this.http.get(this.url)
            .toPromise()
            .then(responce => responce.json() as User[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any>{
        return Promise.reject(error.message || error);
    }
}