import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-laserfiche',
  templateUrl: './user-laserfiche.component.html',
  styleUrls: ['./user-laserfiche.component.scss']
})
export class UserLaserficheComponent implements OnInit {

  constructor(private router:Router ,private formbulider:FormBuilder) { }
  formdata:FormGroup
    ngOnInit(): void {


      this.formdata = this.formbulider.group({
        name: ['',[Validators.required]],
        email: ['',[Validators.email, Validators.required]],
        department: ['',[ Validators.required]],
        role: ['',[ Validators.required]],
        position: ['',[ Validators.required]],
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
        get department(){return this.formdata.get('department')!;}
        get role(){return this.formdata.get('role')!;}
        get position(){ return this.formdata.get('position')!;}
        get username(){return this.formdata.get('username')!;}
        get password(){return this.formdata.get('password')!;}
        get confirm(){return this.formdata.get('confirm')!;}

}
