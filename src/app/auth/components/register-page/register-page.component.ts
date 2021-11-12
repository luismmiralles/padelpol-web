import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  registerForm = this.fb.group({
    name: ['', Validators.required],
    paddleLevel: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    passwordConfirmation: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onRegisterSubmit(){
    console.log("Register form submitted ", this.registerForm.value);
    
  }

}
