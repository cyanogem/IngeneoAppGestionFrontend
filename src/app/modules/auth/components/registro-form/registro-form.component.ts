import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-registro-form',
  templateUrl: './registro-form.component.html',
  styleUrls: ['./registro-form.component.css']
})
export class RegistroFormComponent
{
  formuser = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
  })

  form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]],
    // confirmPassword: ['', [Validators.required]],
  });

  showregistro = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authServices: AuthService,
  ){}


  register() {
    console.log("registro" + this.form.valid);
    if (this.form.valid) {
      const { name, email, password } = this.form.getRawValue();
      console.log(this.form.getRawValue());
      this.authServices.registroAndlogin(name,email,password)
      .subscribe({
        next: () => {
          console.log("path/inicio");
          this.router.navigate(['app/inicio'],{
            queryParams: {email, password}
          });
        },
        error: () => {
        }
      })
    } else {
      this.form.markAllAsTouched();
    }
  }
  validaruser(){
    if (this.formuser.valid) {
      const { email} = this.formuser.getRawValue();
      this.authServices.validaruser(email)
      .subscribe({
        next: (rta) => {
          if(rta.isAvailable){
            this.showregistro = true;
              this.form.controls.email.setValue(email);
          }else{
            this.router.navigate(['/login'],{
              queryParams: {email}
            });

          }        

        },
        error: () => {
        }
      })
    } else {
      this.form.markAllAsTouched();
    }
  }

}
