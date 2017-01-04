import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthHttp, JwtHelper} from 'angular2-jwt';

@Injectable()
export class AuthAccess {
    jwt:string;
    decodedJwt:string;

    jwtHelper:JwtHelper = new JwtHelper();

    urlLogout:string = "api/auth/signout";

    constructor(public router:Router, public http:Http, public authHttp:AuthHttp) {
        this.jwt = localStorage.getItem('id_token');
        this.decodedJwt = this.jwtHelper.decodeToken(this.jwt);
    }

    public logout():void {
        this.http.get(this.urlLogout)
            .toPromise()
            .then(() => {
                localStorage.removeItem('id_token');
                localStorage.removeItem('user');
                this.router.navigate(['authorization']);
            });

    }
}
