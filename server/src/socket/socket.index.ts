import {MessageSocket} from './message.socket';

export function SocketIndex(io: any){
    
    io.on('connection', (socket: any) => {
        console.log('User ' + socket.id + ' connected');
        MessageSocket(socket);
    });
    
    
}