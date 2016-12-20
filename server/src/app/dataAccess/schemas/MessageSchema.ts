/**
 * Created by Паша on 12.12.2016.
 */
import DataAccess = require('../DataAccess');
import IMessageModel = require("./../../model/interfaces/MessageModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class MessageSchema {

    static get schema() {
        var schema = mongoose.Schema({
            owner_id: {type: String},
            owner_login: {type: String},
            text: {type: String},
            date: {type: Date, default: Date.now},
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IMessageModel>("Message", MessageSchema.schema);
export = schema;