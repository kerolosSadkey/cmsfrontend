import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  constructor(private router:Router ,private formbulider:FormBuilder,private activeroute:ActivatedRoute) { }
  formdata:FormGroup
  collection:any[]=[]
  user:any=[]
    ngOnInit(): void {

      this.collection=[

        {id:1,name:"name1" , email:"emai1@s.com",keyperson:"keyperson1",address:"sohage",priority:"01203586159",due_date:"12-6-2022"},
        {id:2,name:"name1" , email:"emai1@s.com",keyperson:"keyperson2",address:"sohage",priority:"01123658974",due_date:"12-7-2022"},
        {id:3,name:"name3", email:"emai1@s.com" ,keyperson:"keyperson3",address:"sohage",priority:"01002378963",due_date:"12-8-2022"},
        {id:4,name:"name4" , email:"emai1@s.com" , keyperson:"keyperson4",address:"sohage",priority:"01002378963",due_date:"12-9-2022"},
        {id:5,name:"name5" , email:"emai1@s.com",keyperson:"keyperson5",address:"sohage",priority:"01002378963",due_date:"12-10-2022"},
        {id:6,name:"name6", email:"emai1@s.com" ,keyperson:"keyperson6",address:"sohage",priority:"01123658974",due_date:"12-11-2022"},
        {id:7,name:"name7", email:"emai1@s.com" ,keyperson:"keyperson7",address:"assuit",priority:"01123658974",due_date:"12-12-2022"},
        {id:8,name:"name8" , email:"emai1@s.com",keyperson:"keyperson8",address:"assuit",priority:"01002378963",due_date:"12-11-2022"},
        {id:9,name:"name9", email:"emai1@s.com" ,keyperson:"keyperson9",address:"assuit",priority:"01002378963",due_date:"12-12-2022"},
        {id:10,name:"name10" , email:"emai1@s.com",keyperson:"keyperson10",address:"assuit",priority:"01123658974",due_date:"12-10-2022"},
        {id:11,name:"name11" , email:"emai1@s.com",keyperson:"keyperson11",address:"assuit",priority:"01123658974",due_date:"12-9-2022"},
        {id:12,name:"name12" , email:"emai1@s.com" ,keyperson:"keyperson12",address:"assuit",priority:"01002378963",due_date:"12-6-2022"},
        {id:13,name:"name13" , email:"emai1@s.com" ,keyperson:"keyperson13",address:"cairo",priority:"01123658974",due_date:"12-8-2022"},
        {id:14,name:"name14" , email:"emai1@s.com" ,keyperson:"keyperson14",address:"cairo",priority:"01002378963",due_date:"12-7-2022"},
        {id:15,name:"name115" , email:"emai1@s.com",keyperson:"keyperson15",address:"cairo",priority:"01123658974",due_date:"12-6-2022"},
        {id:16,name:"name16" , email:"emai1@s.com",keyperson:"keyperson16",address:"cairo",priority:"01002378963",due_date:"12-6-2022"},



      ]
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

    console.log(this.activeroute.snapshot.paramMap.get('id'))
    this.user=this.collection.find(d=>d.id==this.activeroute.snapshot.paramMap.get('id'))

    this.formdata.patchValue({
      name:this.user.name,
      email:this.user.email,
      department:this.user.name,
      position:this.user.name,
      address:this.user.address,
      role:this.user.phone,
      due_date:this.user. due_date
    })
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
