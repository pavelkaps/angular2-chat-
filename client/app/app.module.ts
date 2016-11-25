/**
 * Created by Паша on 10.11.2016.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';
import {HttpModule} from '@angular/http';
import { routing } from './app.routing';
import {AppComponent} from './app.component';

import { MaterialModule } from '@angular/material';

import {AuthorizationComponent} from './components/authorization/authorization.component'
import {RegistrationComponent} from './components/registration/registration.component'
import {MainComponent} from './components/main/main.component'

import {UsersService} from './services/users.service';
import {VerificationService} from "./services/verification.service";
import './rxjs-extensions';

import {ChatComponent} from './components/chat/chat.component'
import {ChatContentComponent} from "./components/chat-content/chat-content.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        ReactiveFormsModule,
        MaterialModule.forRoot()
    ],
    declarations: [
        AppComponent,
        AuthorizationComponent,
        RegistrationComponent,
        MainComponent,
        ChatComponent,
        ChatContentComponent
    ], 
    providers: [
        UsersService,
        VerificationService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule{}