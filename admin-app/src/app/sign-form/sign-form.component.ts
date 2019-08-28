import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ApiServiceService} from "../api-service/api-service.service";

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.scss']
})
export class SignFormComponent {

  constructor(private apiService: ApiServiceService) {
  }

  onSubmit(form: NgForm) {
    console.log(form)
    const {value: values} = form
    const user = {
      name: values.username,
      password: values.password,
      email: values.email,
      address: {
        city: values.city,
        country: values.country
      }
    }
    this.apiService.saveUser(user).subscribe((user) => {
      console.log(user)
    })

  }

}
