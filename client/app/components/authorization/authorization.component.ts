/**
 * Created by Паша on 10.11.2016.
 */
import { Component, OnInit } from '@angular/core';
import { Verification } from '../../model/verification';
import { Router } from '@angular/router';
import {UsersService} from "../../services/users.service";
import {AuthService} from "../../services/authorization.service";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import{ MdButtonModule } from '@angular/material/button'

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
                private verificationService: AuthService) {
    }

    ngOnInit():void {
        this.authorizationForm = new FormGroup({
            login: new FormControl(''),
            password: new FormControl('')
        });
    }

    login(values : Verification){
        this.verificationService.authorization(values).then(
            (res) => {
                if(res.state == 'success'){
                    console.log(res.user);
                    this.router.navigate(['/main']);
                }else {
                    console.log('Wrong Data');
                }});
    }
}