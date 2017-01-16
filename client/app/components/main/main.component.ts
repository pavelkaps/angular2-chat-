/**
 * Created by Паша on 13.11.2016.
 */
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'main-component',
    templateUrl: 'main.component.html',
    styleUrls: ['main.component.css']
})

export class MainComponent{
    tabIndex: number;
    
    constructor(){
        this.tabIndex = 1;
    }
    setTab(num: number) {
        console.log(num);
        this.tabIndex = num;
    }
    
    isActive(num: number): boolean{
        if(this.tabIndex == num){return true;}
        return false;
    }

    
}