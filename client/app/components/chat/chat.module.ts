/**
 * Created by Паша on 26.12.2016.
 */
import { NgModule } from '@angular/core';

import { ChatComponent }   from './chat.component';
import { routing } from './chat.routing';
import {ChatContentComponent} from "../chat-content/chat-content.component";
import {UserListComponent} from "../user-list/user-list.component";

@NgModule({
    imports: [routing],
    declarations: [
        ChatComponent,
        ChatContentComponent,
        UserListComponent
    ]
})
export class ChatModule {}