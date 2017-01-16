import {MessageSocket} from './message.socket';
import {UsersSocket} from './user.socket';
import Socket = SocketIO.Socket;
import OnlineUsers = require("../app/business/OnlineUsersBusiness");

let User = require("../app/dataAccess/schemas/UserSchema");

export class SocketIndex {
    io:any;
    socketUsers  = [];

    messageSocket: MessageSocket;
    usersSocket: UsersSocket;
    
    constructor(io:any) {
        this.io = io;
        this.listen();
    }

    listen = ()  =>{
        this.io.on('connection', (socket:any) => {
            console.log('User ' + socket.id + ' connected');

            this.messageSocket = new MessageSocket();
            this.usersSocket = new UsersSocket(this);

            this.messageSocket.addSocket(socket);
            this.usersSocket.addSocket(socket);
            
            socket.on('disconnect', ()=> {
                console.log("socket " + socket.id + " disconected");
                var user;
                if (socket.request.user && socket.request.user.logged_in) {
                    OnlineUsers.userDisconnect(socket.request.user._id, (err)=> {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            console.log('Got maybe disconnect!((');
                            user = socket.request.user;
                        }
                    });
                    setTimeout(()=> {
                        OnlineUsers.findByUserId(socket.request.user._id, (err, res)=> {
                            if (err) {
                                console.log(err);
                                return;
                            }
                            if (res) {
                                console.log('User reconnect!', res);
                                return;
                            }
                            console.log("find user");
                            this.deleteFromActiveUsers(socket.request.user._id);
                            console.log('Really disconnect!((');
                            socket.broadcast.emit("user disconnected", user._id);
                        });
                    }, 10000);
                }
            });
        });
    };

    public deleteFromActiveUsers = (_id) =>{
        this.socketUsers.find((user, index, array)=>{
            console.log(user._id, " == ", _id);
            if(_id.equals(user._id)){
                this.socketUsers.splice(index, 1);
                console.log("find and delete");
                return true;
            }
            return false;
        });
    };

    public findUserInActiveUsers = (obj) =>{
        var ifTheObjectHasAnArray = false;
        this.socketUsers.find((user, index, array)=>{

            if(obj._id.equals(user._id)){
                ifTheObjectHasAnArray = true;
                return true;
            }
            return false;
        });
        return ifTheObjectHasAnArray;
    };
    
    public getActiveUsers(){
        return this.socketUsers;
    }
    
    public addToActiveUsers(obj: any){
        this.socketUsers.push(obj);
    }
}

