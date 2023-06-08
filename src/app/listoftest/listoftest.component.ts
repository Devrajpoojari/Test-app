import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../Service/test.service';
import { Test } from '../test';

@Component({
  selector: 'app-listoftest',
  templateUrl: './listoftest.component.html',
  styleUrls: ['./listoftest.component.css']
})
export class ListoftestComponent implements OnInit {

  constructor(private testService: TestService, private router: Router) { }
  listOfTest: Test[];

  ngOnInit(): void {
    this.testService.getAllTest().subscribe((data: any) => {
      this.listOfTest = data;
    })
  }
  deleteitem(obj: any) {
    this.testService.deleteTest(obj).subscribe((data: any) => {
      alert("Test Deleted SuccessFully");
      window.location.reload();

    }, err => {
      alert("Something went wrong");
    })

  }
  updateTest(num: any) {
    localStorage.setItem('id', num);
  }
  addQuestion(testId: number) {
    localStorage.setItem('testId', testId+'');
    console.log(testId)
  }
}
