import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-laserfiche',
  templateUrl: './user-laserfiche.component.html',
  styleUrls: ['./user-laserfiche.component.scss'],

})
export class UserLaserficheComponent implements OnInit {

  constructor(private router:Router ,private formbulider:FormBuilder) { }
  formdata:FormGroup
    ngOnInit(): void {


      this.formdata = this.formbulider.group({
        name: ['',[Validators.required]],
        email: ['',[Validators.email, Validators.required]],
        ip: ['',[ Validators.required]],
        numofsession: ['',[ Validators.required,Validators.pattern(`^[0-9]+$`)]],
        username: ['',[Validators.required]],
        password:['',[Validators.required,Validators.minLength(6),Validators.pattern(`(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}`) ]],
        confirm: ["", [Validators.required]]
    }, { validators: [this.matchPassword('password', 'confirm') ]});
    }
      //Reactive form and validation

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

       get name(){return this.formdata.get('name')!;}
        get email(){return this.formdata.get("email")!; }
        get phone(){ return this.formdata.get('phone')!;}
        get ip(){return this.formdata.get('ip')!;}
        get numofsession(){ return this.formdata.get('numofsession')!;}
        get username(){return this.formdata.get('username')!;}
        get password(){return this.formdata.get('password')!;}
        get confirm(){return this.formdata.get('confirm')!;}

}
