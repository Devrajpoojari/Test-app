import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  uid: string="";
  pass: string="";

  login() {
    console.log(this.uid, this.pass)
    this.userService.login(this.uid, this.pass).subscribe({
      next: (data: any) => {
        localStorage.setItem("userId", data.usedid);
        this.router.navigate(['/test']);
      },
      error: err => alert(err.error.message)
    })
  }


}
