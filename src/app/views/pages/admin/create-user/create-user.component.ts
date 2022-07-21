import { AuthService } from './../../../../core/Services/Authservice/auth.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  constructor(private router:Router ,private formbulider:FormBuilder,private authservice:AuthService) { }
  formdata:FormGroup
    ngOnInit(): void {


      this.formdata = this.formbulider.group({
        name: ['',[Validators.required]],
        email: ['',[Validators.email, Validators.required]],
        department: ['',[ Validators.required]],
        role: ['',[ Validators.required]],
        position: ['',[ Validators.required]],
        username: ['',[Validators.required]],
        image: ['',[Validators.required]],
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
        url:string | ArrayBuffer | null
        uploadFile(file:any){
          const files = file.target.files;
          if (files.length === 0)
              return;

          const mimeType = files[0].type;
          if (mimeType.match(/image\/*/) == null) {
                file.target.value=""
                this.url=""
             document.getElementById("logo")?.setAttribute("src","")
                  return;
          }

          const reader = new FileReader();
         // this.imagePath = files;
          reader.readAsDataURL(files[0]);
          reader.onload = (_event) => {
              this.url = reader.result;
          }
        }
        submit(){
          console.log(this.formdata)
          // this.authservice.save(this.formdata).subscribe(
          //   ()=>{},
          //   (err)=>{
          //   },
          //   ()=>{
          //     Swal.fire({
          //       icon: 'success',
          //       title:'USE successfully!',
          //      text: 'will redirect to list of user',
          //       showConfirmButton: false,
          //       timer: 2000,
          //     }).then(()=>{
          //       this.router.navigate(["admin/allUser"]);
          //     })
          //   }

          // )
        }


}
