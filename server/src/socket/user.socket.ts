/**
 * Created by Паша on 06.12.2016.
 */
import OnlineUsers = require("../app/business/OnlineUsersBusiness");
import {SocketIndex} from "./socket.index";
let User = require("../app/dataAccess/schemas/UserSchema");


export class UsersSocket {

    private socket:any;

    indexSocket: SocketIndex;

    constructor(indexSocket :any){
        this.indexSocket = indexSocket;
    }
    addSocket(socket: any):void{
        this.socket = socket;
        this.listen();
    };

    listen = ()  =>  {
        this.socket.on("i am new user", ()=> {
            if (this.socket.request.user && this.socket.request.user.logged_in) {
                console.log('New user join to chat' , this.socket.request.user);

                var newUser = new User();
                newUser._id = this.socket.request.user._id;
                newUser.login = this.socket.request.user.login;
                if (this.socket.request.user.image) {
                    newUser.image = this.socket.request.user.image;
                }
                
                    OnlineUsers.userConnect(newUser, (error, result) => {
                        if (error) {
                            console.log(error);
                        }
                        else {
                            if (this.indexSocket.findUserInActiveUsers(newUser) == false) {
                                console.log("Notify about user join" + newUser.login );
                                this.indexSocket.addToActiveUsers(newUser);
                                this.socket.broadcast.emit("join new user", newUser);
                            }
                        }
                    });
            }
        });
        this.socket.on("i logout", ()=> {
            if (this.socket.request.user && this.socket.request.user.logged_in) {
                var newUser = new User();
                newUser._id = this.socket.request.user._id;
                newUser.login = this.socket.request.user.login;
                if (this.socket.request.user.image) {
                    newUser.image = this.socket.request.user.image;
                }
                
                this.indexSocket.deleteFromActiveUsers(this.socket.request.user._id)
            }
        });
    };

   
}