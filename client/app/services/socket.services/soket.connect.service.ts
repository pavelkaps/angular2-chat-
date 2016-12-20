/**
 * Created by Паша on 27.11.2016.
 */
import { Injectable } from "@angular/core";
import * as io from "socket.io-client";

@Injectable()
export class SocketConnectionService {
    private socket: SocketIOClient.Socket;
    
    constructor() {
        this.socket = io.connect();
        console.log(this.socket, "SocketConnection");
    }

    get Socket(){
        return this.socket;
    }
    
}