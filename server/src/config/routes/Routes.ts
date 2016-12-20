/// <reference path="../../controllers/VerificationController.ts" />

import express = require('express');
import path = require('path');
import UsersRoutes = require('./UsersRoutes');
import AuthRoutes = require('./AuthRoutes');
import OnlineUsersRoutes = require('./OnlineUsersRoutes');

var app = express();

class Routes {
    passport: any;

    constructor(passport: any){
        this.passport = passport;
    }

    get routes() {
        app.use("/", new OnlineUsersRoutes().routes);
        app.use("/", new UsersRoutes().routes);
        app.use("/auth", new AuthRoutes(this.passport).routes);

        return app;
    }
}
export = Routes;