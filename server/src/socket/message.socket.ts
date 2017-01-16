/**
 * Created by Паша on 29.11.2016.
 */
let Message = require("../app/dataAccess/schemas/MessageSchema");

export class MessageSocket{

    private socket:any;
    addSocket(socket: any):void{
        this.socket = socket;
        this.listen();
    };
    
    listen(): void {
        this.socket.on("send message", (message, callback)=> {
            console.log('Server side message', message);

            var newMessage = new Message();

            newMessage.owner_id = this.socket.request.user._id;
            newMessage.owner_login = this.socket.request.user.login;
            newMessage.text = message.text;

            this.socket.broadcast.emit("new message", newMessage);
            callback(newMessage);
        });
    }
}
/*
export function MessageSocket(socket: any){

        socket.on("send message", (message, callback)=> {
            console.log('Server side message', message);

            var newMessage = new Message();

            newMessage.owner_id = this.socket.request.user._id;
            newMessage.owner_login = this.socket.request.user.login;
            newMessage.text = message.text;

            this.socket.broadcast.emit("new message", newMessage);
            callback(newMessage);
        });
    
}*/