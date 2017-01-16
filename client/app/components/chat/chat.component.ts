import { Component } from '@angular/core';
import {UserSocketService} from "../../services/socket.services/users-socket.service";

@Component({
    moduleId: module.id,
    selector: 'chat',
    templateUrl: 'chat.component.html',
    styleUrls: ['chat.component.css']
})

export class ChatComponent{
    constructor(private userSocketService: UserSocketService){
        console.log("NOTIFY ABOUT ME");
        this.userSocketService.notifyAboutMe();
    }
}