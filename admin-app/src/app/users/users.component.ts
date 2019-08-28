import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../api-service/api-service.service";
import {User} from "../api-service/api-service.interface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Array<User>;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.apiService.getUser().subscribe(users => {
      this.users = users
      console.log(this.users)
    })

  }

}
