/**
 * Created by Паша on 10.11.2016.
 */
import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    template: `
        <router-outlet></router-outlet>
    `,
    styleUrls: ['app.component.css']
    
})

export class AppComponent{
    constructor(){
    }
}