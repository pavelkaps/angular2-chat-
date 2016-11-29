/// <reference path="../../controllers/VerificationController.ts" />

import express = require('express');
import path = require('path');

import Chat = require('../../app/dataAccess/schemas/ChatSchema');
import UsersRoutes = require('./UsersRoutes');
import VerificationRoutes = require('./VerificationRoutes');
var app = express();

class Routes {

    get routes() {

        app.use("/", new UsersRoutes().routes);
        app.use("/verification", new VerificationRoutes().routes);

        return app;
    }
}
export = Routes;