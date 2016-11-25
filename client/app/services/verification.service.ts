/**
 * Created by Паша on 21.11.2016.
 */
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { VerificationLogin } from '../model/verification-login';
import { Headers, Http} from '@angular/http';
import {User} from "../model/user";
import {Verification} from "../model/verification";

@Injectable()
export class VerificationService{

    private verificationUrl = 'api/verification';
    private headers = new Headers({'Content-Type' : 'application/json'});

    constructor(private http: Http){}

    authorization(values: VerificationLogin): Promise<any>{
        return this.http
            .post(this.verificationUrl + '/login', JSON.stringify(values), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    registration(values: Verification): Promise<any>{
        return this.http
            .post(this.verificationUrl + '/registration', JSON.stringify(values), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any>{
        return Promise.reject(error.message || error);
    }
}