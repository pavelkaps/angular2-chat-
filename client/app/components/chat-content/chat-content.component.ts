/**
 * Created by Паша on 22.11.2016.
 */
import { Component, OnInit } from '@angular/core';
import { Message } from '../../model/message';
import { MessageService } from '../../services/socket.services/message.service';
import {UserMessage} from "../../model/user.message";
import { Router } from '@angular/router';
import {AuthAccess} from "../../auth/auth.access";
import {ProfileService} from "../../services/profile.service";



@Component({
    moduleId: module.id,
    selector: 'chat-content',
    templateUrl: 'chat-content.component.html',
    styleUrls: ['chat-content.component.css']
})

export class ChatContentComponent implements OnInit{
    messageBox: Array<UserMessage> = [];
    messageInput = new Message();

    profileLogin: string;
    profileImage: string;

    constructor(private messageService: MessageService,private router: Router, private auth: AuthAccess,
                private  profileService: ProfileService){}

    ngOnInit():void {
        this.messageService.newMessageEvent.subscribe(newMessage => this.messageBox.push(newMessage));
        this.getProfile();
        
    }

    getProfile(){
        this.profileLogin = this.profileService.getLogin();
        this.profileImage = this.profileService.getImage();
    }
    
    add(message: Message){
        if(message.text != ""){
            if(message.text == "exit"){
                this.auth.logout();
                return;
            }
            this.messageService.send(message);
            this.messageInput.text = '';
        }
    }

    OnPushEnter(event : any, message: Message): void{
        if(event.keyCode == 13) {
            this.add(message);
        }
    }
}