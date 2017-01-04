/**
 * Created by Паша on 04.01.2017.
 */
import express = require("express");

class ProfileController {
    getInformationAboutProfile(req:express.Request, res:express.Response):void {
        if(req.user) {
            var user = req.user;
            user.password = "none";
            res.send({state: 'success', user: user});
        }
        res.send({state: 'failure'});
    }
}

export = ProfileController;