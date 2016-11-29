/**
 * Created by Паша on 10.11.2016.
 */
import {Component} from '@angular/core';
import {SocketService} from './services/socket.services/soket.service';
@Component({
    moduleId: module.id,
    selector: 'app',
    template: `
        <router-outlet></router-outlet>
    `
    
})

export class AppComponent{
    constructor( private socketService: SocketService){
    }
}