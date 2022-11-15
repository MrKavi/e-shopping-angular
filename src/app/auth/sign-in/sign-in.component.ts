import { Component, OnInit } from '@angular/core';
import { SigninForm } from 'src/app/types/Auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  form: SigninForm = {
    email: '',
    password: '',
  };
  constructor() {}

  ngOnInit(): void {}
  submit() {
    console.log(this.form);
  }
}
