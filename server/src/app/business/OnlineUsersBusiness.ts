/**
 * Created by Паша on 09.12.2016.
 */

import mongoose = require("mongoose");
let User = require("../dataAccess/schemas/UserSchema");
let OnlineUsers = require("../dataAccess/schemas/OnlineUsersSchema");

class OnlineUsersBusiness{

    static userConnect(item: any, callback: (error: any, result: any) => void) {
        var user = new OnlineUsers();
        user.user = item._id;
        user.save(callback);
    }

    static userDisconnect(_id: string, callback:(error: any) => void) {
        OnlineUsers.remove({user: _id}, (err) => callback(err));
    }

    static getAllOnlineUsers (callback: (error: any, result: any) => void) {
        OnlineUsers.find({}).populate('user').exec((err, users)=>{
            var onlineUsers = [];
            for(let user of users){
                let oneOfUsers = new User();
                oneOfUsers = user.user;
                onlineUsers.push(oneOfUsers);
            }
            callback(err, onlineUsers);
        });
    }

    static AllRemove(callback:(error: any, result: any) => void) {
        OnlineUsers.remove({}, (err) => callback(err, null));
    }

    static findByUserId(_id: string, callback: (error: any, result: any) => void) {
        OnlineUsers.findOne({user: _id}, callback);
    }


    private static toObjectId (_id: string) : mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(_id)
    }

}

Object.seal(OnlineUsersBusiness);
export = OnlineUsersBusiness;