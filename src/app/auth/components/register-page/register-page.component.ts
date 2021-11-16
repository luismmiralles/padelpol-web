import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { appRoutes } from 'src/app/app-routes';
import { SweetalertService } from 'src/app/core/services/sweetalert.service';
import { authRoutes } from '../../auth-routes';
import { PaddleLevelApiResponse } from '../../interfaces/paddle-level-api-response';
import { AuthApiService } from '../../services/auth-api.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  registerForm = this.fb.group({
    name: [''],
    paddleLevel: [''],
    email: [''],
    password: [''],
    passwordConfirmation: [''],
  });

  loginPagePath = `/${appRoutes.authModule}/${authRoutes.loginPage}`;

  public paddleLevels: PaddleLevelApiResponse[];
  filteredPaddleLevels!: Observable<PaddleLevelApiResponse[]>;

  constructor(private fb: FormBuilder, private authApiService: AuthApiService, private sweetalertService: SweetalertService) { }

  ngOnInit(): void {
    this.authApiService.getPaddleLevels().subscribe(res => {
      this.paddleLevels = res;
      this.registerForm.controls['paddleLevel'].setValue(''); //mete un valor vacío y activa el valueChanges y así se cargan los valores
    });

    this.filteredPaddleLevels = this.registerForm.controls['paddleLevel'].valueChanges.pipe(
      map((value: string | PaddleLevelApiResponse) => {
        if (typeof value != "string") value = value.name;
        return this._filter(value);
      }),
    );
  }


  displayFn(paddleLevel: PaddleLevelApiResponse): string {
    return paddleLevel && paddleLevel.name ? paddleLevel.name : '';
  }

  private _filter(value: string): PaddleLevelApiResponse[] {
    return this.paddleLevels.filter(pl => pl.name.toLowerCase().includes(value.toLowerCase()));
  }

  onRegisterSubmit(): any {
    const params = this.registerForm.value;
    // if(!params.paddleLevel.id) return console.log("Nivel de paddle obligatorio"); OTRA FORMA
    if (typeof params.paddleLevel == 'string') return this.sweetalertService.warning("Selecciona el nivel de paddle");
    if (params.password != params.passwordConfirmation) return this.sweetalertService.warning("Las contraseñas han de ser iguales");

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
