import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';
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

  constructor(private fb: FormBuilder, private authApiService: AuthApiService, private sweetalertService: SweetalertService, private sessionStorageService: SessionStorageService) { }

  ngOnInit(): void {
  }


  onLoginSubmit(): any {
    const params = this.registerLogin.value;

    this.authApiService.login({
      password: params.password,
      email: params.email
    }).subscribe({
      next: res => {
        this.sweetalertService.success("Usuario logeado correctamente", "Disfruta!!"),
          this.sessionStorageService.setItem("token", res.access_token)
      },
      error: errorResponse => this.sweetalertService.showAPIErrors(errorResponse)
    })
  }

}
