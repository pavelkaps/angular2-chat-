/**
 * Created by Паша on 27.11.2016.
 */
import { Injectable } from "@angular/core";
import * as io from "socket.io-client";

@Injectable()
export class SocketService {
    socket: SocketIOClient.Socket;

    constructor() {
        this.socket = io.connect('http://localhost:3000');
        //this.socket.emit('connect', this.socket);
    }
    
}