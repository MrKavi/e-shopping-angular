import { Component, OnInit } from '@angular/core';
import { SigninForm } from 'src/app/types/Auth';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
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
