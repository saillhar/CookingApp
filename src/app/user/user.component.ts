import { User } from './user'
import { UserService } from './user.service'
import { Component, OnInit, ErrorHandler } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  name:string;
  users: any;
  errorMessage: string;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
  this.userService.getUsers()
                   .subscribe(
                     users => this.users = users,
                     error =>  this.errorMessage = <any>error);
  }
}
