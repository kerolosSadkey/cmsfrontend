import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-orginaztion',
  templateUrl: './update-orginaztion.component.html',
  styleUrls: ['./update-orginaztion.component.scss']
})
export class UpdateOrginaztionComponent implements OnInit {

  constructor(private router:Router ,private formbulider:FormBuilder,
    private activeroute: ActivatedRoute) { }
orgList:orginzationType[]=[]
orgForm:FormGroup
collection:any[]=[]
orginzation:any=[]
  ngOnInit(): void {
    this.orgList=orginzationMenu

    this.collection=[

      {id:1,name:"name1" , email:"emai1@s.com",keyperson:"keyperson1",address:"sohage",phone:"01203586159",due_date:"12-6-2022"},
      {id:2,name:"name1" , email:"emai1@s.com",keyperson:"keyperson2",address:"sohage",phone:"01123658974",due_date:"12-7-2022"},
      {id:3,name:"name3", email:"emai1@s.com" ,keyperson:"keyperson3",address:"sohage",phone:"01002378963",due_date:"12-8-2022"},
      {id:4,name:"name4" , email:"emai1@s.com" , keyperson:"keyperson4",address:"sohage",phone:"01002378963",due_date:"12-9-2022"},
      {id:5,name:"name5" , email:"emai1@s.com",keyperson:"keyperson5",address:"sohage",phone:"01002378963",due_date:"12-10-2022"},
      {id:6,name:"name6", email:"emai1@s.com" ,keyperson:"keyperson6",address:"sohage",phone:"01123658974",due_date:"12-11-2022"},
      {id:7,name:"name7", email:"emai1@s.com" ,keyperson:"keyperson7",address:"assuit",phone:"01123658974",due_date:"12-12-2022"},
      {id:8,name:"name8" , email:"emai1@s.com",keyperson:"keyperson8",address:"assuit",phone:"01002378963",due_date:"12-11-2022"},
      {id:9,name:"name9", email:"emai1@s.com" ,keyperson:"keyperson9",address:"assuit",phone:"01002378963",due_date:"12-12-2022"},
      {id:10,name:"name10" , email:"emai1@s.com",keyperson:"keyperson10",address:"assuit",phone:"01123658974",due_date:"12-10-2022"},
      {id:11,name:"name11" , email:"emai1@s.com",keyperson:"keyperson11",address:"assuit",phone:"01123658974",due_date:"12-9-2022"},
      {id:12,name:"name12" , email:"emai1@s.com" ,keyperson:"keyperson12",address:"assuit",phone:"01002378963",due_date:"12-6-2022"},
      {id:13,name:"name13" , email:"emai1@s.com" ,keyperson:"keyperson13",address:"cairo",phone:"01123658974",due_date:"12-8-2022"},
      {id:14,name:"name14" , email:"emai1@s.com" ,keyperson:"keyperson14",address:"cairo",phone:"01002378963",due_date:"12-7-2022"},
      {id:15,name:"name115" , email:"emai1@s.com",keyperson:"keyperson15",address:"cairo",phone:"01123658974",due_date:"12-6-2022"},
      {id:16,name:"name16" , email:"emai1@s.com",keyperson:"keyperson16",address:"cairo",phone:"01002378963",due_date:"12-6-2022"},



    ]

    //Reactive form and validation
    this.orgForm=this.formbulider.group({
      Name:['',[Validators.required,Validators.minLength(5)]],
      keyperson:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.email]],
      phone:this.formbulider.array(
      [ this.formbulider.control('')],[Validators.required,Validators.maxLength(11)]

      ),
      address:this.formbulider.array(
      [ this.formbulider.control('')],[Validators.required]

      ),

     password:['',[Validators.required,Validators.minLength(6),Validators.pattern(`(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}`) ]],
     cpassword:['',[Validators.required]],
     Delivery:['',[Validators.required,Validators.minLength(5)]]

    })

    console.log(this.activeroute.snapshot.paramMap.get('id'))
    this.orginzation=this.collection.find(d=>d.id==this.activeroute.snapshot.paramMap.get('id'))

    this.orgForm.patchValue({
      Name:this.orginzation.name,
      email:this.orginzation.email,
      keyperson:this.orginzation.keyperson,
      address:this.orginzation.address,
      phone:this.orginzation.phone,
      due_date:this.orginzation. due_date
    })


    }

  orgbind:orginzationType={}
  selectOrganizationType(val:any){
    console.log(val)
  this.orgbind=this.orgList.find(o=>o.id==val)!
    console.log(this.orgbind)
  }


  get Name(){return this.orgForm.get("Name")}
  get phone(){ return this.orgForm.get("phone") as FormArray }
  get address(){return this.orgForm.get("address") as FormArray }
  addphone(){

    this.phone.push(this.formbulider.control(''))
  }

  deletephone(i:number){
   this.phone.removeAt(i);
  }

  addAddress(){

    this.address.push(this.formbulider.control(''))
  }

  deleteAddress(i:number){
   this.address.removeAt(i);
  }

}

export interface orginzationType {
  id?: number;
  name?: string;

}

export const orginzationMenu: orginzationType[] = [

    {
      id:1,
     name:"Ministry"
    },
    {
      id:2,
     name:"holding company"
    },
    {
      id:3,
     name:"staff"
    },
    {
      id:4,
     name:"company"
    },
    {
      id:5,
     name:"Centralized management /public"
    },
    {
      id:6,
     name:"sub management"
    },

    {
      id:7,
     name:"management"
    },

    {
      id:8,
     name:"department"
    },


]
