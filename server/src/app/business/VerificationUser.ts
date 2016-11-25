/**
 * Created by Паша on 18.11.2016.
 */
import mongoose = require("mongoose");

import UserModel = require("./../model/UserModel");
import IUserModel = require("./../model/interfaces/UserModel");
import UserSchema = require("./../dataAccess/schemas/UserSchema");

class VerificationUser<T>{
    private _model: mongoose.Model<mongoose.Document>;

    constructor (schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }

    find(_user: T, callback: (error: any, result: T) => void) {
        this._model.findOne( _user, callback);
    }
}

export = VerificationUser;