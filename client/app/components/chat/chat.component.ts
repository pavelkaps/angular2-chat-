import { Component } from '@angular/core';
import {UserSocketService} from "../../services/socket.services/users-socket.service";

@Component({
    moduleId: module.id,
    selector: 'chat',
    templateUrl: 'test/chat.component.html',
    styleUrls: ['test/chat.component.css']
})

export class ChatComponent{
    constructor(private userSocketService: UserSocketService){
        this.userSocketService.notifyAboutMe();
    }
}