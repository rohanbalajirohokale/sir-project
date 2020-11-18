import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgetComponent } from './module/forget/forget.component';
import { SigninComponent } from './module/signin/signin.component';
import { SignupComponent } from './module/signup/signup.component';


const routes: Routes = [{
  path:"",redirectTo:'signin',pathMatch:'full'
  }
,
{
  path:'signin',component:SigninComponent
},{path:'forget',component:ForgetComponent},
{path:'signup',component:SignupComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
