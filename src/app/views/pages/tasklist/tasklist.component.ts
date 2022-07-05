import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {

  constructor(private htttp:HttpClient) { }

  collection:any=[
    {}
  ]
  p: number = 1;

  total: number = 0;
  ngOnInit(): void {
 this.getUsers()


  }

  getUsers(){
    this.htttp.get('https://reqres.in/api/users').subscribe((respon:any)=>{
      this.collection=respon.data
      console.log(this.collection)
      this.total = respon.data.total;
    })
  }
  pageChangeEvent(event: number){

    this.p = event;

    this.getUsers();

}

}
