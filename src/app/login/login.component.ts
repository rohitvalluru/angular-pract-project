import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { of } from 'rxjs';

function mustContainAttheRate(control: AbstractControl){
  if(control.value.includes('@')){
    return null;
  }
  return  {doesNotContainAttheRate: true};
}

function emailIsUnique(control: AbstractControl){
  if(control.value !== 'test@gmail.com'){
    return of(null);
  }

  return of({notUnique: true});
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required, mustContainAttheRate],
      asyncValidators:[emailIsUnique]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8) ]
    })
  })

  get emailIsInvalid(){
    return (
      this.form.controls.email.touched &&
      this.form.controls.email.dirty &&
      this.form.controls.email.invalid
    )
  }

  get passwordIsInvalid(){
    return (
      this.form.controls.password.touched &&
      this.form.controls.password.dirty &&
      this.form.controls.password.invalid
    )
  }
  
  onSubmit(){
    console.log(this.form)
  }
}
