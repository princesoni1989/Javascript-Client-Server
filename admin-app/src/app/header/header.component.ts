import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SubjectObservableService} from "../subject-observable.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userLoggedIn: boolean = false
  subscription: Subscription

  constructor(private router: Router, private subjectService: SubjectObservableService) {
    this.subscription = this.subjectService.getObservable().subscribe((message) => {
      this.userLoggedIn = message ? true : false
    })
  }

  ngOnInit() {
    const token = localStorage.getItem('token')
    if (token) {
      this.userLoggedIn = true;
    }
  }

  logout() {
    localStorage.removeItem('token')
    this.subjectService.clearMessage();
    this.router.navigate([''])

  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
