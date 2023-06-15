import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private userService: UserService) { }

  uId: string = localStorage.getItem('userId');
  user: User = new User("", false, "", "");
  ngOnInit(): void {
  }

  updateUser() {
    this.userService.update(this.user, this.uId).subscribe(data => {
      alert("User Data updated successfully...");
    }, err => {
      alert(err.error.message);
    })
  }

}
