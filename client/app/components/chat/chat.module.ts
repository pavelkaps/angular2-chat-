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

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing
    ],
    declarations: [
        ChatComponent,
        ChatContentComponent,
        UserListComponent
    ]
})
export class ChatModule {}