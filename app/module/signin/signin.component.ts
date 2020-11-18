import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormsModule,Validators,MinLengthValidator, FormControl} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  [x: string]: any;
  signInForm!: FormGroup;
  hide=true;


  constructor(private formBuilder: FormBuilder) {

    

}





  ngOnInit(): void {
    this.initSignInForm();
  }


  initSignInForm() {
    this.signInForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]], 
      password: ['', [Validators.required]]
    
}
    );
  }
  get username() {
    return this.signInForm.controls.username as FormControl;
  }
  get password() {
    return this.signInForm.controls.password as FormControl;
  }


  togglePassword() {
    this.isPassword = !this.isPassword;
  }
}
