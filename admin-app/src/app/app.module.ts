import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import AppRoutingModule from './app-routing.module'
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {UsersComponent} from './users/users.component';
import {UserService} from "./user.service";
import {CompanyComponent} from './company/company.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {HeaderComponent} from './header/header.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {RouterModule} from "@angular/router";
import {SignFormComponent} from './sign-form/sign-form.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpInterceptorService} from "./http-interceptor.service";
import { EmojiDirective } from './directives/emoji.directive';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CompanyComponent,
    LandingPageComponent,
    HeaderComponent,
    LoginFormComponent,
    SignFormComponent,
    EmojiDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
