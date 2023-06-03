import { Component, OnInit } from '@angular/core';
import { TestService } from '../Service/test.service';
import { Test } from '../test';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private testService:TestService) { }

  name:string;
  duration:string;
  startTime:string;
  endTime:string;
  test:Test=new Test(0,"","","","");
  
  ngOnInit(): void {
  }

  submit(){
    this.test.testTitle=this.name;
    this.test.testDuration=this.duration;
    this.test.startTime=this.startTime;
    this.test.endTime=this.endTime;
    console.log(this.test)
    this.testService.addTest(this.test).subscribe((data:any)=>{
      if(data!=null)
      {
        alert("Test Added Successfully");
      }
    })
  }
}
