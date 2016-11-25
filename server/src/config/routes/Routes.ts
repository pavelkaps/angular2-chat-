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

        app.post('/setup', function(req, res) {
            //Array of chat data. Each object properties must match the schema object properties
            var chatData = [{
                created: new Date(),
                content: 'Hi',
                username: 'Chris',
                room: 'php'
            }, {
                created: new Date(),
                content: 'Hello',
                username: 'Obinna',
                room: 'laravel'
            }, {
                created: new Date(),
                content: 'Ait',
                username: 'Bill',
                room: 'angular'
            }, {
                created: new Date(),
                content: 'Amazing room',
                username: 'Patience',
                room: 'socet.io'
            }];

            //Loop through each of the chat data and insert into the database
            for (var c = 0; c < chatData.length; c++) {
                //Create an instance of the chat model
                var newChat = new Chat(chatData[c]);
                //Call save to insert the chat
                newChat.save(function(err, savedChat) {
                    console.log(savedChat);
                });
            }
            //Send a resoponse so the serve would not get stuck
            res.send('created');
        });

        app.get('/msg', function(req, res) {
            //Find
            Chat.find({
                'room': req.query.room.toLowerCase()
            }).exec(function(err, msgs) {
                //Send
                res.json(msgs);
            });
        });

        return app;
    }
}
export = Routes;