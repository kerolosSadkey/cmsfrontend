import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {

  constructor(private htttp:HttpClient) { }

  collection:any[]=[]
  page: number = 1;
  pageSize: number = 2;

  total: number = 0;
  ngOnInit(): void {

    this.collection=[
      {id:1,name:""}
    ]
 this.getUsers()

  }

  getUsers(){
    this.htttp.get('https://reqres.in/api/users').subscribe((respon:any)=>{
      this.collection=respon.data
      console.log(this.collection[0].email)
      this.total = respon.data.total;
    })
  }

  pagesize(n:number){
    this.pageSize=n;
  }
}
