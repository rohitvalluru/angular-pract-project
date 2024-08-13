import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LoginComponent } from './login/login.component';
import { SignupFormComponent } from './signup-form/signup-form.component';


const routes: Routes = [{
  path:'', redirectTo:'/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'parent', component: ParentComponent},
  {path:'child', component: ChildComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupFormComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
