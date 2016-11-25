/**
 * Created by Паша on 22.11.2016.
 */
import { Component } from '@angular/core';
import { Message } from '../../model/message';
@Component({
    moduleId: module.id,
    selector: 'chat-content',
    templateUrl: 'chat-content.component.html',
    styleUrls: ['chat-content.component.css']
})

export class ChatContentComponent{
    messageBox = [];
    messageInput = new Message();

    add(message: Message){
        let newMessage = new Message();
        newMessage.text = message.text;
        this.messageBox.push(newMessage);
    }
}