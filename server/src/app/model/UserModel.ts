/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import IUserModel = require('./interfaces/UserModel');

class UserModel {

    private _userModel: IUserModel;

    constructor(heroModel: IUserModel) {
        this._userModel = heroModel;
    }
    get login (): string {
        return this._userModel.login;
    }

    get password (): string {
        return this._userModel.password;
    }
    
    get imgage (): string{
        return this._userModel.image;
    }
    
    
}
Object.seal(UserModel);
export =  UserModel;