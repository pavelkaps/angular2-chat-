/**
 * Created by Паша on 29.11.2016.
 */
export function MessageSocket(socket : any){
    socket.on("send message", (message, callback)=>{
        console.log('Server side message' + message);
        socket.broadcast.emit("new message", message);
        callback(message);
    });
}