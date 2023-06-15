import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService,private router:Router) { }
  user: User = new User("", false, "", "");
  rPassword: string = "";

  ngOnInit(): void {
  }
  register(form: NgForm) {
    if (this.rPassword == this.user.userPassword) {
      console.log(this.user)
      this.userService.register(this.user).subscribe({
        next: data => { alert(data); form.reset();this.router.navigate(['/login']) },
        error: err => { alert("Some thing went wrong") }
      })
    }else{
      alert("Password is Not Matching")
    }
  }

}
