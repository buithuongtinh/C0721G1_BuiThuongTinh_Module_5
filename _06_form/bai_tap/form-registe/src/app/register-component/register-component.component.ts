import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Register} from "ts-node";

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  @Output("user")
  onCreate = new EventEmitter<Register>();

  userFrom: FormGroup;

  constructor() {
    this.userFrom = new FormGroup({
      email: new FormControl("", [Validators.minLength(5)]),
      country: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.min(18)]),
      gender: new FormControl("0", [Validators.required]),
      phone: new FormControl("", [Validators.pattern(/^\+84\d{9,10}$/)]),
      password: new FormControl("", [Validators.minLength(6)]),
      confirmPassword: new FormControl("", [Validators.minLength(6)])
    });
  }

  ngOnInit(): void {
  }

  createUser() {
    console.log(this.userFrom);
    if (this.userFrom.valid) {
      this.onCreate.emit(this.userFrom.value);
    }
  }

}
