/**
 * Created by Паша on 10.11.2016.
 */
export class User{
    
    constructor(login: string, password: string){
        this.login = login;
        this.password = password;
    }
    
    _id: string;
    login: string;
    password: string;
    image: string;
}