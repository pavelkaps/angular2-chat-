/**
 * Created by Паша on 10.12.2016.
 */
import {Message} from './message';

export class UserMessage{
    message: Message;
    isMyMessage: boolean;

    constructor(message: Message, isMyMessage: boolean){
        this.isMyMessage = isMyMessage;
        this.message = message;
    }
}