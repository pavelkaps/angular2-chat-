/**
 * Created by Паша on 22.11.2016.
 */
import IChatModel = require('./interfaces/ChatModel');

class UserModel {

    private chatModel: IChatModel;

    constructor(heroModel: IChatModel) {
        this.chatModel = heroModel;
    }
    get created (): Date {
        return this.chatModel.created;
    }

    get content (): string {
        return this.chatModel.content;
    }

    get username (): string {
        return this.chatModel.username;
    }

    get room (): string {
        return this.chatModel.room;
    }

}
Object.seal(UserModel);
export =  UserModel;
