import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {  Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-creat-correspondence',
  templateUrl: './creat-correspondence.component.html',
  styleUrls: ['./creat-correspondence.component.scss']
})
export class CreatCorrespondenceComponent implements OnInit {

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

  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl('');
  filteredFruits: Observable<any[]>;
  fruits: any[] = ['Lemon'];
  allFruits: any[] = [{id:1,name:'Apple'}, {id:2,name:'Lemon'}, {id:3,name:'Lime'}, {id:4,name:'Orange'}, {id:5,name:'Strawberry'}];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;

  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: any | null) => (fruit ? this._filter(fruit.name) : this.allFruits.slice())),
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    console.log(event.value)

    // Add our fruit
    if (value) {
      this.fruits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: number): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    console.log(event.option)
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    console.log(value)
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.name.toLowerCase().includes(filterValue));
  }
}
