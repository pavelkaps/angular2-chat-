/**
 * Created by Паша on 16.12.2016.
 */
import express = require("express");
import OnlineUsersController = require("../../controllers/OnlineUsersController");
var router = express.Router();

class OnlineUsersRoutes{
    private userController: OnlineUsersController;

    constructor () {
        this.userController = new OnlineUsersController();
    }
    
    get routes () {
        var controller = this.userController;
        router.get("/onlineusers", controller.getAllOnlineUsers);
        return router;
    }
}

export = OnlineUsersRoutes;