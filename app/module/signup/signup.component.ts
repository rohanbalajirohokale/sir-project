import { Component, OnInit } from '@angular/core';

import {FormBuilder,Validators,FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  signUpForm!: FormGroup;
  [x: string]: any;

 

  constructor(private formBuilder : FormBuilder) {
    
  }

  ngOnInit() {
    this.initsignUpForm()
  }
  initsignUpForm() {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.email]],
      password: ['', [Validators.required]],
      confirm: ['']
    });
  }
  
    
 
  
  get firstname() {
    return this.signUpForm.controls.username as FormControl;
  }
  get password() {
    return this.signUpForm.controls.username as FormControl;
  }
  }

 


  


 
