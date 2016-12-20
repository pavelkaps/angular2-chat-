/**
 * Created by Паша on 06.12.2016.
 */
import OnlineUsers = require("../app/business/OnlineUsersBusiness");
let User = require("../app/dataAccess/schemas/UserSchema");


export function UsersSocket(socket:any) {
    socket.on("i am new user", ()=> {
        if (socket.request.user && socket.request.user.logged_in) {
            console.log('New user join to chat' + socket.request.user);

            var newUser = new User();
            newUser._id = socket.request.user._id;
            newUser.login = socket.request.user.login;
            if (socket.request.user.image) {
                newUser.image = socket.request.user.image;
            }

            OnlineUsers.userConnect(newUser, (error, result) => {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log(result, "User connected and add to DB");
                    socket.broadcast.emit("join new user", newUser);
                }
            });
        }
    });
}