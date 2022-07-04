import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formdata :FormGroup
  constructor(private router: Router,  private fb:FormBuilder) { }

  ngOnInit(): void {

    this.formdata = this.fb.group({
      email: ['',[Validators.email, Validators.required]],
      password:['',[Validators.required,Validators.minLength(6),Validators.pattern(`(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}`) ]],
      confirm: ["", [Validators.required]]
  }, { validator: this.matchPassword2('password', 'confirm') });
  }

  get email(){
    return this.formdata.get("email")!;
    }
    get password(){
    return this.formdata.get('password')!;
    }
    get confirm(){
      return this.formdata.get('confirm')!;
      }

    matchPassword2(firstControl:string, secondControl:string): ValidatorFn {

      return (control: AbstractControl): ValidationErrors | null => {

        const password = control.get(firstControl)!.value;
        const confirm = control.get(secondControl)!.value;

        if (password != confirm) {
          console.log(password)
          console.log(confirm)
           return { 'noMatch': true } }

        return null

      }
    }
  onRegister(e: Event) {
    e.preventDefault();
    localStorage.setItem('isLoggedin', 'true');
    if (localStorage.getItem('isLoggedin')) {
      this.router.navigate(['/']);
    }
  }

}
