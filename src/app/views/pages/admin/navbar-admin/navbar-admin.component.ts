import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.scss']
})
export class NavbarAdminComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private router: Router
  ) { }
lang:string
  ngOnInit(): void {
   this.lang=localStorage.getItem("lang")!
  }

  /**
   * Sidebar toggle on hamburger button click
   */
  toggleSidebar(e: Event) {
    e.preventDefault();
    this.document.body.classList.toggle('sidebar-open');
  }

  /**
   * Logout
   */
  onLogout(e: Event) {
    e.preventDefault();
    localStorage.removeItem('isLoggedin');

    if (!localStorage.getItem('isLoggedin')) {
      this.router.navigate(['/auth/login']);
    }


  }
  convert(src:any,title:any){

    let img=this.document.getElementById("mainimg")
    let span_Title=this.document.getElementById("maintilte")
    img?.setAttribute("src",src)
    console.log(src)
    span_Title!.textContent=title;

    let link = this.document.createElement("link")
    if( title=="English" ){

      localStorage.setItem("lang","en")

    }else{

      localStorage.setItem("lang","ar")

    }

   location.reload()



  }

}
