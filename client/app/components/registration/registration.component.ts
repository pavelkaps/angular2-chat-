/**
 * Created by Паша on 10.11.2016.
 */
import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { Router } from '@angular/router';
import {UsersService} from "../../services/users.service";
import {AuthService} from "../../services/auth.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Verification} from '../../model/verification';

@Component({
    moduleId: module.id,
    selector: 'registration-component',
    templateUrl: 'registration.component.html',
    styleUrls: ['registration.component.css']
})

export class RegistrationComponent implements OnInit {
    public registrationForm:FormGroup;

    constructor(private router:Router,
                private usersService:UsersService,
                private verificationService: AuthService) {
    }

    ngOnInit():void {
            this.registrationForm = new FormGroup({
                login: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])),
                password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])),
                image: new FormControl('')
        });
    }

    create(values : any){
        let userValue = new User();
        userValue.login = values.login;
        userValue.image = values.image;
        userValue.password = values.password;

        this.verificationService.registration(userValue).then(
            (res) => {
                console.log(res);
                if(res.state == 'success'){
                    localStorage.setItem('id_token', res.token);
                    localStorage.setItem('user', JSON.stringify(res.user));
                    this.router.navigate(['/main']);
                }else {

            }});
    }
}