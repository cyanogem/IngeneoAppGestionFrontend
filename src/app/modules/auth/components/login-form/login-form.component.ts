import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'
import { Response } from 'src/app/models/response';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent{

  form = this.formBuilder.nonNullable.group({
    usuario: ['', [Validators.required, Validators.required]],
    password: ['', [ Validators.required, Validators.minLength(6)]],
  });
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private authServices: AuthService,
  ){

  }
  mostrarAlerta(message: string, accion: string) {
    this._snackBar.open(message, accion,{
      horizontalPosition:"center",
      verticalPosition:"top",
      duration: 3000
    });
  }
  doLogin() {
    if (this.form.valid) {

      const { usuario, password } = this.form.getRawValue();
      this.authServices.login(usuario, password)
      .subscribe(
        {
          next: (data) => {
            let respuesta: Response = data;
            if(respuesta.success == true){
              this.mostrarAlerta("Inicio de Sesión Exitoso","Listo");
              this.router.navigate(['/app']);
            }else{
              this.mostrarAlerta(respuesta.objectResponse,"Error");
            }

        },
        error: () => {
          this.mostrarAlerta("Oops","Error");
        }
      }
      );
    } else {
      this.form.markAllAsTouched();
    }
  }

}
