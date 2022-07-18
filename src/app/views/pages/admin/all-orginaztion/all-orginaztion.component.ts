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
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  collection:collectiondata[]=[]
  ngOnInit(): void {
    this.collection=[

      {id:1,name:"name1" ,subject:"Subject1",document:"document1.pdf",priority:"high",due_date:"12-6-2022"},
      {id:2,name:"name2" ,subject:"Subject2",document:"document1.pdf",priority:"low",due_date:"12-7-2022"},
      {id:3,name:"name3" ,subject:"Subject3",document:"document1.pdf",priority:"cratical",due_date:"12-8-2022"},
      {id:4,name:"name4" ,subject:"Subject4",document:"document1.pdf",priority:"high",due_date:"12-9-2022"},
      {id:5,name:"name5" ,subject:"Subject5",document:"document1.pdf",priority:"high",due_date:"12-10-2022"},
      {id:6,name:"name6" ,subject:"Subject6",document:"document1.pdf",priority:"low",due_date:"12-11-2022"},
      {id:7,name:"name7" ,subject:"Subject7",document:"document1.pdf",priority:"low",due_date:"12-12-2022"},
      {id:8,name:"name8" ,subject:"Subject8",document:"document1.pdf",priority:"high",due_date:"12-11-2022"},
      {id:9,name:"name9" ,subject:"Subject9",document:"document1.pdf",priority:"cratical",due_date:"12-12-2022"},
      {id:10,name:"name10" ,subject:"Subject10",document:"document1.pdf",priority:"low",due_date:"12-10-2022"},
      {id:11,name:"name11" ,subject:"Subject11",document:"document1.pdf",priority:"low",due_date:"12-9-2022"},
      {id:12,name:"name12" ,subject:"Subject12",document:"document1.pdf",priority:"cratical",due_date:"12-6-2022"},
      {id:13,name:"name13" ,subject:"Subject13",document:"document1.pdf",priority:"low",due_date:"12-8-2022"},
      {id:14,name:"name14" ,subject:"Subject14",document:"document1.pdf",priority:"high",due_date:"12-7-2022"},
      {id:15,name:"name115" ,subject:"Subject15",document:"document1.pdf",priority:"low",due_date:"12-6-2022"},
      {id:16,name:"name16" ,subject:"Subject16",document:"document1.pdf",priority:"high",due_date:"12-6-2022"},



    ]
  }

  getelement(ele:any){
   console.log(ele.id)
   this.collection.find(val=>val.id==ele.id)!

  this.router.navigate(["admin/allOraginaze"])

  }

}



export interface collectiondata{
  id:number
  ,name:string ,
  subject:string,
  document:string,
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
