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
      name: ['',[Validators.required]],
      email: ['',[Validators.email, Validators.required]],
      phone: ['',[ Validators.required,Validators.maxLength(11)]],
      username: ['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(6),Validators.pattern(`(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}`) ]],
      confirm: ["", [Validators.required]]
  }, { validator: [this.matchPassword('password', 'confirm') ]});
  }

  get name(){
    return this.formdata.get('name')!;
    }
  get email(){
    return this.formdata.get("email")!;
    }
    get phone(){
      return this.formdata.get('phone')!;
      }
    get username(){
      return this.formdata.get('username')!;
      }
    get password(){
    return this.formdata.get('password')!;
    }
    get confirm(){
      return this.formdata.get('confirm')!;
      }


    matchPassword(firstControl:string, secondControl:string): ValidatorFn {

      return (control: AbstractControl): ValidationErrors | null => {

        const password = control.get(firstControl)!.value;
        const confirm = control.get(secondControl)!.value;

        if (password != confirm) {
          console.log(password)
          console.log(confirm)
           return { noMatch: true } }

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
