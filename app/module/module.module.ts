import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetComponent } from './forget/forget.component';
import {MaterialModule} from '../material-module';
import { from } from 'rxjs';

import{FormsModule} from '@angular/forms';
  import{ReactiveFormsModule}from '@angular/forms';
import { ControlMessagesComponent } from './control-messages/control-messages.component';

//import{ReactiveForms} from '@angular/forms/forms';

@NgModule({
  declarations: [SigninComponent, SignupComponent, ForgetComponent, ControlMessagesComponent, ],
  imports: [
    CommonModule,MaterialModule,FormsModule,FormsModule,ReactiveFormsModule
  ],
  exports:[SigninComponent, SignupComponent, ForgetComponent,ControlMessagesComponent]
})
export class ModuleModule { }
