/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import UserBusiness = require("../app/business/UserBusiness");
import IBaseController = require("./BaseController");
import IUserModel = require("./../app/model/interfaces/UserModel");

class UserController implements IBaseController <UserBusiness> {

    create(req: express.Request, res: express.Response): void {
        try {
            var hero: IUserModel = <IUserModel>req.body;
            let userBusiness = new UserBusiness();
            userBusiness.create(hero, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({hero});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    update(req: express.Request, res: express.Response): void {
        try {
            var hero: IUserModel = <IUserModel>req.body;
            var _id: string = req.params._id;
            let userBusiness = new UserBusiness();
            userBusiness.update(_id, hero, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({hero});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    delete(req: express.Request, res: express.Response): void {
        try {
            let userBusiness = new UserBusiness();
            var _id: string = req.params._id;
            userBusiness.delete(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {
            let userBusiness = new UserBusiness();
            userBusiness.retrieve((error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {
            let userBusiness = new UserBusiness();
            var _id: string = req.params._id;
            userBusiness.findById(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    
    
}
export = UserController;