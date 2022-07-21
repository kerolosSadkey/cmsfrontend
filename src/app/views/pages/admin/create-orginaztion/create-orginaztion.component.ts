
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-orginaztion',
  templateUrl: './create-orginaztion.component.html',
  styleUrls: ['./create-orginaztion.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateOrginaztionComponent implements OnInit {

  constructor(private router:Router ,private formbulider:FormBuilder) { }
orgList:orginzationType[]=[]
orgForm:FormGroup

  ngOnInit(): void {
    console.log(this.orgList)
    //Reactive form and validation
    this.orgForm=this.formbulider.group({
      Name:['',[Validators.required,Validators.minLength(5)]],
      orgcontrol:['',[Validators.required]],
      keyperson:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.email]],
      phone:this.formbulider.array(
      [ this.formbulider.control('')],[Validators.required,Validators.maxLength(11)] ),
      address:this.formbulider.array( [ this.formbulider.control('')],[Validators.required]  ),
      logo:['',[Validators.required,Validators.pattern("/image\/*/")]],


    })
    }

  orgbind:orginzationType={}

  selectsectoer(val:any){
  if(val==1){
    this.orgList=[]
    this.orgList=orginzationMenu.filter(ele=>ele.id == 1 ||  ele.id==2)


  console.log(this.orgList)
  }else{
    this.orgList=[]
    this.orgList=orginzationMenu.filter(ele=>ele.id !== 1 &&  ele.id !==2)

  }
  }
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
message:string
url:string | ArrayBuffer |null
  uploadfile(file:any){
    const files = file.target.files;
    if (files.length === 0)
        return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported. as Extension (jpg,png ....)";
          file.target.value=""
          this.url=""
       document.getElementById("logo")?.setAttribute("src","")
            return;
    }
    this.message =""
    const reader = new FileReader();
   // this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
        this.url = reader.result;
    }
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
     name:"Agenecy"
    },
    {
      id:3,
     name:"Holding Company"
    },
    {
      id:4,
     name:"Company"
    },
    {
      id:5,
     name:"Central Department"
    },
    {
      id:6,
     name:"General Department"
    },

    {
      id:7,
     name:"Department"
    },

    {
      id:8,
     name:"Section"
    },


]
