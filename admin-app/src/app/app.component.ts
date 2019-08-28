import {Component} from '@angular/core';
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'admin-app';
  users = []


  constructor(private UserService: UserService) {
    this.users = UserService.getUsers()

  }

  onClick() {
  }
}
