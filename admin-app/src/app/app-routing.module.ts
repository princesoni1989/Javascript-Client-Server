import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {UsersComponent} from "./users/users.component";
import {LoginFormComponent} from "./login-form/login-form.component";
import {SignFormComponent} from "./sign-form/sign-form.component";
import {AuthGuardService} from "./auth-guard.service";


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'signup', component: SignFormComponent},
  {path: 'users', component: UsersComponent, canActivate:[AuthGuardService]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export default class AppRoutingModule {

}
