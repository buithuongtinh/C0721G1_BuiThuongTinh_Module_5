import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import{IformLogin} from "../iform-login";

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  userLogin: FormGroup;

  constructor() {
    this.userLogin = new FormGroup({
      username: new FormControl("",[Validators.minLength(9)]),
      password: new FormControl("",[Validators.minLength(9)])
    })
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.userLogin.value);
    if (this.userLogin.valid){
      alert("ok login thanh cong")
    }
  }


}
