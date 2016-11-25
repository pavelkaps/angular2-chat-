/**
 * Created by Паша on 22.11.2016.
 */
import DataAccess = require('../DataAccess');
import IChatModel = require("./../../model/interfaces/ChatModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class ChatSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            created: Date,
            content: String,
            username: String,
            room: String
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IChatModel>("Chat", ChatSchema.schema);
export = schema;