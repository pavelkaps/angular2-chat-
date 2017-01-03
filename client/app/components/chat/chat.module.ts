/**
 * Created by Паша on 26.12.2016.
 */
import { NgModule } from '@angular/core';

import { ChatComponent }   from './chat.component';
import { routing } from './chat.routing';
import {ChatContentComponent} from "../chat-content/chat-content.component";
import {UserListComponent} from "../user-list/user-list.component";
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import {Angular2AutoScroll} from "angular2-auto-scroll/lib/angular2-auto-scroll.directive";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing
    ],
    declarations: [
        Angular2AutoScroll,
        ChatComponent,
        ChatContentComponent,
        UserListComponent
    ]
})
export class ChatModule {}