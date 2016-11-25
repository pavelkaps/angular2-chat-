/**
 * Created by Паша on 18.11.2016.
 */
import express = require("express");
import VerificationUser = require("../app/business/VerificationUser");
import IUserModel = require("../app/model/interfaces/UserModel");
import UserSchema = require("../app/dataAccess/schemas/UserSchema");

module Verification {
    export class VerificationController <T> {
        public returnResult (res:express.Response, result:T)  {
            throw new Error("Abstract Method");
        };

        public userVerification = (req:express.Request, res:express.Response):void => {
            try {
                var user:T = <T>req.body;
                let verificationUser = new VerificationUser<T>(UserSchema);
                verificationUser.find(user, (error, result) => {
                    if (error) {
                        res.send({"result": "error"});
                    }
                    else {
                        this.returnResult(res, result);
                    }
                });
            }
            catch (e) {
                console.log(e);
                res.send({"error": "error in your request"});
            }
        }

    }

    export class VerificationLogin<T> extends VerificationController<T> {
        returnResult(res:express.Response, result:T):void{
            if (result != null) {
                res.send({"result": "success", "user" : result});
            } else {
                res.send({"result": "none"});
            }
        }
    }

    export class VerificationRegister<T> extends VerificationController<T> {
        returnResult (res:express.Response, result:T):void{
            if (result != null) {
                res.send({"result": "none"});
            } else {
                res.send({"result": "success"});
            }
        }
    }
}

export = Verification;