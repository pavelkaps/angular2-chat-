/// <reference path="../../controllers/VerificationController.ts" />

import express = require('express');
import path = require('path');
import UsersRoutes = require('./UsersRoutes');
import AuthRoutes = require('./AuthRoutes');
import OnlineUsersRoutes = require('./OnlineUsersRoutes');
import ProfileRoutes = require('./ProfileRoutes');

var app = express();

class Routes {
    passport: any;
    app: any;
    
    constructor(passport: any){
        this.passport = passport;
    }

    get routes() {
        app.use("/", new OnlineUsersRoutes().routes);
        app.use("/", new UsersRoutes().routes);
        app.use("/", new ProfileRoutes().routes)
        app.use("/auth", new AuthRoutes(this.passport).routes);

        return app;
    }
}
export = Routes;