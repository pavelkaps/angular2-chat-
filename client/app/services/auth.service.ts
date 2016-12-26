/**
 * Created by Паша on 21.11.2016.
 */
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Headers, Http} from '@angular/http';
import {Verification} from "../model/verification";

@Injectable()
export class AuthService {

    private verificationUrl = 'api/auth';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http:Http) {
    }

    authorization(values:Verification):Promise<any> {
        return this.http
            .post(this.verificationUrl + '/login', JSON.stringify(values), {headers: this.headers})
            .toPromise()
            .then(res =>  res.json())
            .catch(this.handleError);
    }

    registration(values:Verification):Promise<any> {
        return this.http
            .post(this.verificationUrl + '/signup', JSON.stringify(values), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }


    private handleError(error:any):Promise<any> {
        return Promise.reject(error.message || error);
    }
}