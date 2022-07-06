import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-document',
  templateUrl: './show-document.component.html',
  styleUrls: ['./show-document.component.scss']
})
export class ShowDocumentComponent implements OnInit {

  constructor(private route: ActivatedRoute,private fb :FormBuilder) { }


  dropdownList:any=[];
  selectedItems :any;
  dropdownSettings:any ;
  collection:any[]=[]
  document:any=[]
  formdata:FormGroup
  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };

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

    console.log(this.route.snapshot.paramMap.get('id'))
    this.document=this.collection.find(d=>d.id==this.route.snapshot.paramMap.get('id'))
  this.formdata=this.fb.group({
     name:['',Validators.required],
     subject:['',Validators.required],
     due_date:['',Validators.required],
     priorty:['',Validators.required],

  })

  this.formdata.patchValue({
     name:this.document.name,
     subject:this.document.subject,
     priority:this.document.priority,
     due_date:this.document.due_date,

   })
  }
  ItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }


}
