/**
 * Created by Паша on 10.11.2016.
 */
import { Component, OnInit } from '@angular/core';
import { VerificationLogin } from '../../model/verification-login';
import { Router } from '@angular/router';
import {UsersService} from "../../services/users.service";
import {VerificationService} from "../../services/verification.service";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'authorization-component',
    templateUrl: 'authorization.component.html',
    styleUrls: ['authorization.component.css']
})

export class AuthorizationComponent implements OnInit {
    public authorizationForm:FormGroup;
    ifDone : string = "...";
    
    constructor(private router:Router,
                private usersService:UsersService,
                private verificationService: VerificationService) {
    }

    ngOnInit():void {
        this.authorizationForm = new FormGroup({
            login: new FormControl(''),
            password: new FormControl('')
        });
    }

    login(values : VerificationLogin){
        this.verificationService.authorization(values).then(
            (res) => {
                if(res.result == 'success'){
                    console.log(res.user);
                    this.router.navigate(['/main']);
                }else {
                    console.log('Wrong Data');
                }});
    }
}