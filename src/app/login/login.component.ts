import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as jwt_decode from "jwt-decode";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router, private apiService:ApiService) { }

  

  message = '';

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }

  loginBtn() {

    if (this.loginForm.valid) {
      this.message = '';
      this.apiService.loginApi(this.loginForm.value).subscribe(res => {
        console.log(res.json());
        if (res.json().message === 'ok') {
          localStorage.setItem('token', res.json().usertoken)
          this.router.navigateByUrl('/home');
              // this.router.navigateByUrl('/home');
        } else {
          this.message = res.json().message;
        }
      });
    } 
  }

}
