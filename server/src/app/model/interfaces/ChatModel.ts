/**
 * Created by Паша on 22.11.2016.
 */
import mongoose = require("mongoose");

interface ChatModel extends mongoose.Document {
    created: Date,
    content: string,
    username: string,
    room: string
}

export = ChatModel;