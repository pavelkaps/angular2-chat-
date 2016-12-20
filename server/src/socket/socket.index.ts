import {MessageSocket} from './message.socket';
import {UsersSocket} from './user.socket';
import Socket = SocketIO.Socket;
import OnlineUsers = require("../app/business/OnlineUsersBusiness");

export class SocketIndex {
    io:any;
    socketUsers:Array<Socket> = [];

    constructor(io:any) {
        this.io = io;
        this.listen();
    }

    private listen():void {
        this.io.on('connection', (socket:any) => {
            console.log('User ' + socket.id + ' connected');

            MessageSocket(socket);
            UsersSocket(socket);

            socket.on('disconnect', function () {
                var user;
                if (socket.request.user && socket.request.user.logged_in) {
                    OnlineUsers.userDisconnect(socket.request.user._id, (err, res)=> {
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
                            console.log('Really disconnect!((');
                            socket.broadcast.emit("user disconnected", user._id);
                        });
                    }, 10000);
                }
            });
        });


    }
}

