/**
 * Created by Паша on 06.12.2016.
 */
import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {UserSocketService} from "../../services/socket.services/users-socket.service";
import {OnlineUsersService} from "../../services/online.users.service";

@Component({
    moduleId: module.id,
    selector: 'user-list',
    templateUrl: 'user-list.component.html',
    styleUrls: ['user-list.component.css']
})

export class UserListComponent implements OnInit{
    onlineUsers: User[] = [];

    constructor(private userSocketService: UserSocketService,
    private onlineUsersService: OnlineUsersService){
        
    }
    
    ngOnInit():void {
        this.onlineUsersService.getOnlineUsers().then((users)=>{
            console.log(users);
            for(let user of users){
                console.log(user);
                this.onlineUsers.push(<User>user);
            }
        });

        this.userSocketService.JoinUserEvent.subscribe(User => {this.onlineUsers.push(User); console.log(this.onlineUsers);});

        this.userSocketService.LeaveUserEvent.subscribe(id =>{
            this.onlineUsers.find((user, index, array)=>{
                if(user._id == id){
                    this.onlineUsers.splice(index, 1);
                    console.log("find and delete");
                    return true;
                }
                return false;
            });
        });
    }
}