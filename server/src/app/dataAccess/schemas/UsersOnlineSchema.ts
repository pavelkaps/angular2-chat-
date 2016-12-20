/**
 * Created by Паша on 09.12.2016.
 */
import DataAccess = require('../DataAccess');

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class OnlineUsersSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            user:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model("OnlineUsersBusiness", OnlineUsersSchema.schema);
export = schema;