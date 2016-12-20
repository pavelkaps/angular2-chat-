/**
 * Created by Паша on 12.12.2016.
 */
import mongoose = require("mongoose");

interface MessageModel extends mongoose.Document {
    owner_id: string,
    owner_login: string,
    text: string,
    date: Date
}

export = MessageModel;