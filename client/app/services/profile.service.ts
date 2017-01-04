/**
 * Created by Паша on 04.01.2017.
 */
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { User } from '../model/user';
import { Headers, Http} from '@angular/http';

@Injectable()
export class ProfileService{

    private url = 'api/profile';
    private headers = new Headers({'Content-Type' : 'application/json'});

    constructor(private http: Http){}

    getLogin(): string {
        if (localStorage.getItem("user")) {
            var user = JSON.parse(localStorage.getItem("user"));
            console.log(user);
            return user.login;
        } else {
            this.aboutMe().then((res)=> {
                localStorage.setItem('user', res.user);
                return res.user.login;
            });
        }
    }

    getImage(): string {
        if (localStorage.getItem("user")) {
            var user = JSON.parse(localStorage.getItem("user"));
            console.log(user);
            if(user.image){
                return user.image;
            }
        } else {
            this.aboutMe().then((res)=> {
                localStorage.setItem('user', res.user);
                if(res.user.image){
                    return user.image;
                }
            });
        }
    }


    aboutMe(): Promise<any> {
        return this.http.get(this.url)
            .toPromise()
            .then(responce => {responce.json()})
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any>{
        return Promise.reject(error.message || error);
    }
}