import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-listof-questions',
  templateUrl: './listof-questions.component.html',
  styleUrls: ['./listof-questions.component.css']
})
export class ListofQuestionsComponent implements OnInit {

  constructor(private questionService:QuestionService) { }

  testId:string=localStorage.getItem('testId')
  ngOnInit(): void {
    this.questionService.listOfQuestions(this.testId).subscribe((data:any)=>{
      this.listOfQuestion=data;
      console.log(data)
  
    })
  }
  listOfQuestion:any;
  updateTest(questionId:any){
    localStorage.setItem('qId',questionId);
  }

}
