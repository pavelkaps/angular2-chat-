import { Injectable, EventEmitter, Output } from "@angular/core";
import * as io from "socket.io-client";
import { Message } from '../../model/message'
import {User} from "../../model/user";
import {message} from "gulp-typescript/release/utils";
import {SocketConnectionService} from "./soket.connect.service";

@Injectable()
export class UserSocketService {
    socket: SocketIOClient.Socket;

    @Output() JoinUserEvent: EventEmitter<User> = new EventEmitter(true);
    @Output() LeaveUserEvent: EventEmitter<string> = new EventEmitter(true);

    constructor(private socketConnection: SocketConnectionService) {
        this.socket = this.socketConnection.Socket;
        console.log(this.socket, "UserSocketService");
        this.listen();
    }
    public notifyAboutMe(): void{
        console.log('I am user');
        this.socket.emit("i am new user");
    }

    public listen(){
        this.socket.on("join new user", (user)=>{
            console.log('New user in chat', user);
            this.JoinUserEvent.emit(user);
        });

        this.socket.on("user disconnected", (_id)=>{
            console.log("user disconnected", _id);
            this.LeaveUserEvent.emit(_id);
        });
    }

}