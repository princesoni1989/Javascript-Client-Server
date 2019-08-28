import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserApiService, User} from './api-service.interface'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService implements UserApiService {
  private apiUrl = 'http://ec2-3-81-129-138.compute-1.amazonaws.com:4000/api/admin';

  constructor(private httpClient: HttpClient) {
  }

  getUser(): any {
    return this.httpClient.get(`${this.apiUrl}/user`);
  }

  saveUser(user: User): any {
    return this.httpClient.post(`${this.apiUrl}/user`, user);

  }

  loginUser(user: { email: string, password: string }): any {
    return this.httpClient.post(`${this.apiUrl}/user/login`, user);

  }

}
