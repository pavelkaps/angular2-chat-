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
    private headers : Headers;

    constructor(private http: Http){
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Cache-Control', 'no-cache');
        this.headers.append('Cache-Control', 'no-store');
        this.headers.append('Pragma', 'no-cache');
        console.log(this.headers);

    }

    getOnlineUsers(): Promise<User[]>{
        return this.http.get(this.url, {headers: this.headers})
            .toPromise()
            .then(responce => responce.json() as User[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any>{
        return Promise.reject(error.message || error);
    }
}