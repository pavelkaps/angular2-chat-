/**
 * Created by Паша on 26.11.2016.
 */
import http = require('http');
import socketio = require('socket.io');
import {app} from "../server";
import { SocketIndex } from '../socket/socket.index';

var server = http.createServer(app);
var io = socketio(server);

SocketIndex(io);

server.listen(app.get('port'), function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express angular app is listening on port:' + port);
});