/// <reference path="../typings/index.d.ts" />

import express = require('express');
import bodyParser = require("body-parser");
import passport = require('passport');
import path = require('path');
import flash = require('connect-flash');
import session = require('express-session');
import cookieParser = require('cookie-parser');


//Routes folder
import BaseRoutes = require("./config/routes/Routes");

var port: number = process.env.PORT || 3000;
var env:string = process.env.NODE_ENV || 'developement';

var app = express();

app.set('port', port);

app.use('/app', express.static(path.resolve(__dirname, '../client/app')));
app.use('/libs', express.static(path.resolve(__dirname, '../client/libs')));

// For system.js to work. Can be removed if bundling.
app.use(express.static(path.resolve(__dirname, '../client')));
app.use(express.static(path.resolve(__dirname, '../../node_modules')));

app.use(cookieParser());
app.use(bodyParser.json());

//Required for passport
app.use(session({ secret: 'mySession' }));
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use('/api', new BaseRoutes(passport).routes);

//Passport config
import passportConfig = require("./config/passport/passport-init");
passportConfig.config(passport);

//Angular index.html
var renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
};

app.get('/', renderIndex);

if(env === 'developement'){
    app.use(function(err, req: express.Request, res: express.Response, next: express.NextFunction) {
        res.status(err.status || 500);
        res.json({
            error: err,
            message: err.message
        });
    });
}

app.use(function(req: express.Request, res: express.Response, next) {
    let err = new Error("Not Found");
    next(err);
});

app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});

export { app };