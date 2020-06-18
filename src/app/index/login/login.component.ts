import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl('')
    })
  }

  //click button login thì lưu user vào localstorage
  onSubmit() {
    console.log(this.loginForm.value);

    //lưu data vào localstorage
    if (this.loginService.login(this.loginForm.value.userName, this.loginForm.value.password)) {
      this.router.navigate(['']);
    } else {
      console.log("Login Fail");
    }

  }
}
