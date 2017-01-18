import { User } from './user'
import { UserService } from './user.service'
import { Component, OnInit, ErrorHandler } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  users: User[];
  errorMessage: string;
  
  constructor(private userService: UserService) {
//    userService.getUsers().subscribe(
//      user => this.name = name,
//      error => console.error('Error : ' + ErrorHandler)
//    );
  }

  ngOnInit() {
    this.userService.getUsers();
  }

  getHeroes() {
  this.userService.getUsers()
                   .subscribe(
                     users => this.users = users,
                     error =>  this.errorMessage = <any>error);
  }
}
