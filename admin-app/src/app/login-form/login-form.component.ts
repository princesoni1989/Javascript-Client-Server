import {Component, OnInit} from '@angular/core';
import {ApiServiceService} from "../api-service/api-service.service";
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, Subject} from "rxjs";
import {SubjectObservableService} from "../subject-observable.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  redirectUrl: string

  constructor(private apiService: ApiServiceService,
              private router: Router,
              private subjectService: SubjectObservableService,
              private activatedRouter: ActivatedRoute
  ) {

    activatedRouter.queryParams.subscribe(params => {
      console.log(params)
      if (params.returnUrl) {
        this.redirectUrl = params.returnUrl
      }
    })
  }

  onSubmit(form: NgForm) {
    const {value} = form
    const user = {
      password: value.password,
      email: value.email
    }
    this.apiService.loginUser(user).subscribe(data => {

      localStorage.setItem('token', JSON.stringify(data.token));
      this.subjectService.sendMessage(JSON.stringify(data.token))
      this.router.navigate(['users'])
    })
  }

}
