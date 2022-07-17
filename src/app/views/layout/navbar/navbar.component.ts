import { Component, OnInit, ViewChild, ElementRef, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private router: Router
  ) { }

  ngOnInit(): void {
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
