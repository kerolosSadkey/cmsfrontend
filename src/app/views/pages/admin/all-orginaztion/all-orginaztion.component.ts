import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-orginaztion',
  templateUrl: './all-orginaztion.component.html',
  styleUrls: ['./all-orginaztion.component.scss']
})
export class AllOrginaztionComponent implements OnInit {

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor(private router:Router) {
   
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  collection:any[]=[]
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
    this.collectiontemp=this.collection
    this.lang=localStorage.getItem("lang")!
  }

  selectsectoer(val:any){
    if(val==1){
      this.dataSource.data=[]
      this.dataSource.data=TREE_DATA.filter(ele=>ele.id == 1 ||  ele.id==2)

    }else{
      this.dataSource.data=[]
      this.dataSource.data=TREE_DATA.filter(ele=>ele.id !== 1 &&  ele.id !==2)

    }
    }

oneorg:any
collectiontemp:any[]=[]
lang:string
  getelement(ele:any){
   console.log(ele.id)
 console.log(this.collectiontemp)
 this.collection=this.collectiontemp
 this.oneorg= this.collection.find(o=>o.id==ele.id)
 this.collection=[]
 this.collection.push(this.oneorg)

       console.log(this.collection)
  }
  openrow(id:any){
    this.router.navigate(["admin/updateOraginaze/"+id])
   }

}



export interface collectiondata{
  id:number
  ,name:string ,
  keyperson:string,
  address:string,
  priority:string,
  due_date:string
}
interface FoodNode {
  id?:number;
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    id:1,name: 'Ministry1',
    children: [{id:1,name: 'staff1'}, {id:2,name: 'staff2'}, {id:3,name: 'staff3'}],
  },
  {
    id:5,name: 'holding company',
    children: [
      {
        id:1,name: 'company',
        children: [
          {id:1,name: 'centerlize managment1'}, {id:2,name: 'centerlize managment2'},
          {id:3,name: 'centerlize managment3'}, {id:4,name: 'centerlize managment4'},
          {id:5,name: 'centerlize managment5'}, {id:6,name: 'centerlize managment6', children:[
            {id:7,name:"sub managment"}
          ]},

        ],
      },
      {
        id:1,name: 'campany',
        children: [{id:7,name: 'centerlize managment1'}, {id:4,name: 'centerlize managment2'}],
      },
    ],
  },
];
