/**
 * Created by Паша on 27.11.2016.
 */
import { Injectable, EventEmitter, Output } from "@angular/core";
import * as io from "socket.io-client";
import { Message } from '../../model/message'

@Injectable()
export class MessageService {
    socket: SocketIOClient.Socket;
    @Output() newMessageEvent: EventEmitter<Message> = new EventEmitter(true);

    constructor() {
        this.socket = io.connect();
        this.socket.emit('connect', this.socket);
        this.listen();
    }
    
    public send(message : Message): void{
        console.log('I have message' + message.text);
        this.socket.emit("send message", message, (message)=>{
            this.newMessageEvent.emit(message);
        });
    }
    
    public listen(){
        this.socket.on("new message", (message)=>{
            console.log('Client side message' + message);
            this.newMessageEvent.emit(message);
        });
    }

}