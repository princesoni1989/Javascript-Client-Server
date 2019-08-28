import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: [{ name: string, surname: string }] = [{
    name: 'prince', surname: 'soni'
  }]

  public addUser(user: { name: string, surname: string }) {
    this.users.push(user)
  }

  public getUsers() {
    return this.users;
  }
}
