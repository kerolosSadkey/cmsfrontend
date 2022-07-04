import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  returnUrl: any;
  formdata:FormGroup
  constructor(private router: Router, private route: ActivatedRoute,
    private fb:FormBuilder) { }

  ngOnInit(): void {

    this.formdata = this.fb.group({
      email: ['',[Validators.email, Validators.required]],
      password: ['',Validators.required],

  });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get email(){
  return this.formdata.get("email")!;
  }
  get password(){
  return this.formdata.get('password')!;
  }

  onLoggedin(e: Event) {
    e.preventDefault();
    localStorage.setItem('isLoggedin', 'true');
    if (localStorage.getItem('isLoggedin')) {
      this.router.navigate(["/"]);
    }
  }

}
