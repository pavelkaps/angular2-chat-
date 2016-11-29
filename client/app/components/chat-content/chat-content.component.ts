/**
 * Created by Паша on 22.11.2016.
 */
import { Component, OnInit } from '@angular/core';
import { Message } from '../../model/message';
import { MessageService } from '../../services/socket.services/message.service';
@Component({
    moduleId: module.id,
    selector: 'chat-content',
    templateUrl: 'chat-content.component.html',
    styleUrls: ['chat-content.component.css']
})

export class ChatContentComponent implements OnInit{
    messageBox = [];
    messageInput = new Message();

    constructor(private messageService: MessageService){}

    ngOnInit():void {
        this.messageService.newMessageEvent.subscribe(newMessage => this.messageBox.push(newMessage));
    }

    add(message: Message){
        this.messageService.send(message);
        this.messageInput.text = '';
    }
}