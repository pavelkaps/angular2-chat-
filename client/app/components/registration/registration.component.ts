/**
 * Created by Паша on 10.11.2016.
 */
import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { Router } from '@angular/router';
import {UsersService} from "../../services/users.service";
import {VerificationService} from "../../services/verification.service";
import { FormGroup, FormControl } from '@angular/forms';
import {Verification} from '../../model/verification';

@Component({
    moduleId: module.id,
    selector: 'registration-component',
    templateUrl: 'registration.component.html',
    styleUrls: ['registration.component.css']
})

export class RegistrationComponent implements OnInit {
    public registrationForm:FormGroup;
    
    ifDone : string = "...";

    constructor(private router:Router,
                private usersService:UsersService,
                private verificationService: VerificationService) {
    }

    ngOnInit():void {
            this.registrationForm = new FormGroup({
                login: new FormControl(''),
                password: new FormControl(''),
                repeatpassword: new FormControl('')
        });
    }

    create(values : any){
        let userValue = new Verification;
        userValue.login = values.login;

        this.verificationService.registration(userValue).then(
            (res) => {
                console.log(res);
                if(res.result == "success"){
                    this.usersService.create(new User(values.login, values.password)).then((res)=> console.log(res));
                }else {

            }});
    }
}