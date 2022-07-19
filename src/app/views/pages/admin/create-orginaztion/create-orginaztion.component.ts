import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-orginaztion',
  templateUrl: './create-orginaztion.component.html',
  styleUrls: ['./create-orginaztion.component.scss']
})
export class CreateOrginaztionComponent implements OnInit {

  constructor(private router:Router ,private formbulider:FormBuilder) { }
orgList:orginzationType[]=[]
orgForm:FormGroup
  ngOnInit(): void {
    this.orgList=orginzationMenu



    //Reactive form and validation
    this.orgForm=this.formbulider.group({
      Name:['',[Validators.required,Validators.minLength(5)]],
      orgcontrol:['',[Validators.required]],
      keyperson:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.email]],
      phone:this.formbulider.array(
      [ this.formbulider.control('')],[Validators.required,Validators.maxLength(11)] ),
      address:this.formbulider.array( [ this.formbulider.control('')],[Validators.required]  ),
      logo:['',[Validators.required]],


    })
    }

  orgbind:orginzationType={}
  selectOrganizationType(val:any){
    console.log(val)
  this.orgbind=this.orgList.find(o=>o.id==val)!
    console.log(this.orgbind)
  }


  get name(){return this.orgForm.get("Name")}
  get  orgcontrol(){return this.orgForm.get("orgcontrol")}
  get keyperson(){return this.orgForm.get("keyperson")}
  get email(){return this.orgForm.get("email")}
  get phone(){ return this.orgForm.get("phone") as FormArray }
  get address(){ return this.orgForm.get("address") as FormArray }
  get logo(){return this.orgForm.get("logo")}
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
