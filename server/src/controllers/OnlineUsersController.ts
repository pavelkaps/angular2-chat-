/**
 * Created by Паша on 16.12.2016.
 */
import express = require("express");
import OnlineUsersBusiness = require("../app/business/OnlineUsersBusiness"); 

class OnlineUsersController {
    getAllOnlineUsers(req:express.Request, res:express.Response):void {
        try {
            OnlineUsersBusiness.getAllOnlineUsers((err,result)=>{
                if (err) {
                    console.log(err);
                }
                else {
                    res.send(result);
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({"error": "error in your request"});
        }
    }
}

export = OnlineUsersController;