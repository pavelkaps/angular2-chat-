/**
 * Created by Паша on 04.01.2017.
 */
import express = require("express");
import ProfileController = require("../../controllers/ProfileController");
var router = express.Router();

class ProfileRoutes{
    private userController: ProfileController;

    constructor () {
        this.userController = new ProfileController();
    }

    get routes () {
        var controller = this.userController;
        router.get("/profile", controller.getInformationAboutProfile);
        return router;
    }
}

export = ProfileRoutes;