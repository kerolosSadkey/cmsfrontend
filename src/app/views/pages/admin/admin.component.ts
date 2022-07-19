import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.convert()
  }
  convert(){



    let link = document.createElement("link")
    if( localStorage.getItem("lang")=="ar" ){
      document.head.removeChild(document.head.lastElementChild!)
      document.body.style.direction="rtl";

        link.setAttribute("href","./assets/scss/style.rtl.css")
        link.setAttribute("rel","stylesheet")
        localStorage.setItem("lang","ar")



    }else{
      document.head.removeChild(document.head.lastElementChild!)
      document.body.style.direction="ltr"
      link.setAttribute("href","./assets/scss/style.scss")
      localStorage.setItem("lang","en")

    }
    document.head.appendChild(link)




  }
}
