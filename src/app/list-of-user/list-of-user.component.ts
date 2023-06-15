import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-of-user',
  templateUrl: './list-of-user.component.html',
  styleUrls: ['./list-of-user.component.css']
})
export class ListOfUserComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  user: any[];
  ngOnInit(): void {
    this.userService.getAll().subscribe((data: any) => {
      this.user = data;
    })
  }

  updateUser(userId: any) {
    localStorage.setItem('userId', userId);
    this.router.navigate(['/updateuser'])
  }
  assignTest(id: any) {
    console.log(id)
    localStorage.setItem("tUId", id);
    this.router.navigate(['/assign'])

  }

}
