/**
 * Created by Паша on 27.11.2016.
 */
import { Injectable, EventEmitter, Output } from "@angular/core";
import * as io from "socket.io-client";
import { Message } from '../../model/message'
import {SocketConnectionService} from "./soket.connect.service";
import {User} from "../../model/user";
import {UserMessage} from "../../model/user.message";

@Injectable()
export class MessageService {
    socket: SocketIOClient.Socket;
    @Output() newMessageEvent: EventEmitter<UserMessage> = new EventEmitter(true);

    constructor(private socketConnection: SocketConnectionService) {
        this.socket = this.socketConnection.Socket;
        console.log(this.socket,  "MessageService");
        this.listen();
    }
    
    public send(message : Message): void{
        console.log('I have message' + message.text);
        this.socket.emit("send message", message, (message)=>{
            console.log(message, "принял");
            let userMessage = new UserMessage(message, true);
            this.newMessageEvent.emit(userMessage);
        });
    }
    
    public listen(){
        this.socket.on("new message", (message)=>{
            console.log('Client side message' + message);
            let userMessage = new UserMessage(message, false);
            this.newMessageEvent.emit(userMessage);
        });
    }

}