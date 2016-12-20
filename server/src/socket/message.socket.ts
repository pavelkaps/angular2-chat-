/**
 * Created by Паша on 29.11.2016.
 */
let Message = require("../app/dataAccess/schemas/MessageSchema");

export function MessageSocket(socket : any){
    socket.on("send message", (message, callback)=>{
        console.log('Server side message' , message);

        var newMessage = new Message();

        newMessage.owner_id = socket.request.user._id;
        newMessage.owner_login = socket.request.user.login;
        newMessage.text = message.text;
        
        socket.broadcast.emit("new message", newMessage);
        callback(newMessage);
    });
}