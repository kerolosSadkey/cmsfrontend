import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creat-correspondence',
  templateUrl: './creat-correspondence.component.html',
  styleUrls: ['./creat-correspondence.component.scss']
})
export class CreatCorrespondenceComponent implements OnInit {

  constructor() { }
  dropdownList:any=[];
  selectedItems :any;
  dropdownSettings:any ;


  [x: string]: any;
  defaultNavActiveId:number = 1;



///////////////////////////////////////
progress:number=0
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
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onItemDeSelect(item: any) {
    console.log(item);
  }

  uploadfile(files:any){

    if (files.length > 0 ) {
      let p=document.getElementById("file-preview")
      p?.classList.remove("hidden")
      p!.innerHTML=""
      for(let file of files){
        p!.innerHTML  +=file.name+"<br>"
      }

      let that=this
      let    response=document.getElementById("response")
      response?.classList.remove("hidden")

   let cv= setInterval(function(){
      that.progress+=20

      if( that.progress==120){
        that.progress=0
          clearInterval(cv)
      }
   },200)
      // this.formdata.patchValue({
      //   documents:  file,
      // });
    }
  }
}
