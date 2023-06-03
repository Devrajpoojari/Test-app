import { Component, OnInit } from '@angular/core';
import { TestService } from '../Service/test.service';
import { Test } from '../test';

@Component({
  selector: 'app-updatetest',
  templateUrl: './updatetest.component.html',
  styleUrls: ['./updatetest.component.css']
})
export class UpdatetestComponent implements OnInit {

  constructor(private testService: TestService) { }

  num = localStorage.getItem("id");
  test: Test = new Test(0, "", "", "", "");
  ngOnInit(): void {
    this.getObj();
  }
  getObj() {
    this.testService.getTestById(this.num).subscribe((data: any) => {
      this.test.testId = data.testId;
      this.test.testDuration = data.testDuration;
      this.test.testTitle = data.testTitle;
      this.test.startTime = data.startTime;
      this.test.endTime = data.endTime;
    })
  }

  update() {
    this.testService.updateTest(this.test).subscribe((data: any) => {
      alert("Test Updated Successfully")
    }, (err: any) => {
      alert("Something went wrong")
    })
  }
}