/**
 * Created by Паша on 26.11.        2016.
 */
import http = require('http');
import socketio = require('socket.io');
import passportSocketIo = require('passport.socketio');
import cookieParser = require('cookie-parser');

import {app, passport, MongoStore, SECRET_KEY} from "../server";
import { SocketIndex } from '../socket/socket.index';

var server = http.createServer(app);
var io = socketio(server);

io.use(passportSocketIo.authorize({
    key: 'connect.sid',
    secret: SECRET_KEY,
    store: MongoStore,
    passport: passport,
    cookieParser: cookieParser
}));

new SocketIndex(io);

server.listen(app.get('port'), function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express angular app is listening on port:' + port);
});