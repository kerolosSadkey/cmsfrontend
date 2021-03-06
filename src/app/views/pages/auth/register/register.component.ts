import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { countries } from './country';
import { Icountry } from './country.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formdata :FormGroup
  constructor(private router: Router,  private fb:FormBuilder) { }
contrylist:Icountry[]
  ngOnInit(): void {
this.contrylist=countries
    this.formdata = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.email, Validators.required]],
      phone: ['',[ Validators.required,Validators.maxLength(11)]],
      department: ['',[ Validators.required]],
      username: ['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(6),Validators.pattern(`(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}`) ]],
      confirm: ["", [Validators.required]]
  }, { validators: [this.matchPassword('password', 'confirm') ]});
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
      get department(){
        return this.formdata.get('department')!;
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


    matchPassword(firstControl:string, secondControl:string) {

      return (control: AbstractControl)=> {

        const password = control.get(firstControl)!;
        const confirm = control.get(secondControl)!;

        if (password.value !== confirm.value) {
          confirm.setErrors( {noMatch: true})

          }else{
            confirm.setErrors( null)
          }



      }
    }
  onRegister(e: Event) {
    e.preventDefault();
    localStorage.setItem('isLoggedin', 'true');
    if (localStorage.getItem('isLoggedin')) {
      Swal.fire(
        'created Account successfully!',
        'You clicked the button!',
        'success'
      ).then(()=>{
        this.router.navigate(["/"]);
      })
    }
  }

}
