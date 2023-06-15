import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-assigntest',
  templateUrl: './assigntest.component.html',
  styleUrls: ['./assigntest.component.css']
})
export class AssigntestComponent implements OnInit {

  constructor(private userService:UserService) { }

  tUId:string=localStorage.getItem('tUId')
  testId:string="";

  ngOnInit(): void {
  }
  assign(){
    this.userService.assignTest(this.tUId,this.testId).subscribe(data=>{
      alert("Test Assigned successfully ")
    },err=>{
      alert(err.error.message)})

  }

}
