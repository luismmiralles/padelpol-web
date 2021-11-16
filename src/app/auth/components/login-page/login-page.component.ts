import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SweetalertService } from 'src/app/core/services/sweetalert.service';
import { AuthApiService } from '../../services/auth-api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  registerLogin = this.fb.group({
    email: [''],
    password: ['']
  });

  constructor(private fb: FormBuilder, private authApiService: AuthApiService, private sweetalertService: SweetalertService) { }

  ngOnInit(): void {
  }


  onLoginSubmit(): any {
    const params = this.registerLogin.value;
    // if(!params.paddleLevel.id) return console.log("Nivel de paddle obligatorio"); OTRA FORMA

    this.authApiService.register({
      name: params.name,
      password: params.password,
      password_confirmation: params.passwordConfirmation,
      paddle_level_id: params.paddleLevel.id,
      email: params.email
    }).subscribe({
      next: res => this.sweetalertService.success("Usuario creado correctamente", "Empieza lo bueno"),
      // error: err => this.sweetalertService.error("Ya existe un usuario con este email")
      error: errorResponse => this.sweetalertService.showAPIErrors(errorResponse)
    })

    // .subscribe(res => {
    //   this.sweetalertService.success("Usuario creado correctamente", "Empieza lo bueno");
    // }, err =>{
    //   this.sweetalertService.error("Ya existe un usuario con este email");
    // });
  }

}
