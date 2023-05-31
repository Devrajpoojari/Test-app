import { Component, OnInit } from '@angular/core';
import { TestService } from '../Service/test.service';
import { Test } from '../test';

@Component({
  selector: 'app-listoftest',
  templateUrl: './listoftest.component.html',
  styleUrls: ['./listoftest.component.css']
})
export class ListoftestComponent implements OnInit {

  constructor(private testService:TestService) { }
  listOfTest:Test[];

  ngOnInit(): void {
    this.getListOfTest();
  }

  getListOfTest(){
    this.testService.getAllTest().subscribe((data:any)=>{
      this.listOfTest=data;
    })
  }
}
