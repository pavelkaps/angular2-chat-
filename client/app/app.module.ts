/**
 * Created by Паша on 10.11.2016.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';
import {HttpModule} from '@angular/http';
import { MaterialModule } from '@angular/material';

import { routing } from './app.routing';

import {AppComponent} from './app.component';
import {ChatComponent} from './components/chat/chat.component'
import {ChatContentComponent} from "./components/chat-content/chat-content.component";
import {AuthorizationComponent} from './components/authorization/authorization.component'
import {RegistrationComponent} from './components/registration/registration.component'
import {MainComponent} from './components/main/main.component'

import {UsersService} from './services/users.service';
import {AuthService} from "./services/auth.service";
import {SocketConnectionService} from './services/socket.services/soket.connect.service';
import {MessageService} from './services/socket.services/message.service';


import './rxjs-extensions';
import {UserListComponent} from "./components/user-list/user-list.component";
import {UserSocketService} from "./services/socket.services/users-socket.service";
import {OnlineUsersService} from "./services/online.users.service";

import { AUTH_PROVIDERS } from 'angular2-jwt';
import {AuthGuard} from "./auth/auth.guard";
import {AuthAccess} from "./auth/auth.access";
import {ProfileService} from "./services/profile.service";

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
        MainComponent
    ], 
    providers: [
        UsersService,
        AuthService,
        SocketConnectionService,
        MessageService,
        UserSocketService,
        OnlineUsersService,
        AuthGuard, 
        ...AUTH_PROVIDERS,
        AuthAccess,
        ProfileService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule{}