import { Injectable } from '@angular/core';
import {Route, Router, CanActivate, CanLoad } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  canLoad(route:Route): boolean {
    console.log("canLoad: ");
    return this.canActivate();
  }

  constructor(private router: Router) {}

  canActivate() {
    console.log("canActivate: ");
    if (tokenNotExpired()) {
      console.log("true");
      return true;
    }

    console.log("false");
    this.router.navigate(['authorization']);
    return false;
  }
}
