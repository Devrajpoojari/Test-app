import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {

  }
  name: string = "";

  questionOption1: string = "";
  questionOption2: string = "";
  questionOption3: string = "";
  questionOption4: string = "";
  questionOptions: string[] = [];
  testId: string = localStorage.getItem('testId');

  question: Question = new Question(0, this.questionOptions, "", 0, 0, 0, 0);
  qId:string=localStorage.getItem('qId');


  public onValueChange(event: Event): void {
    const value = (event.target as any).value;
    this.name = value;
  }
  updateQuestion() {
    this.question.quesionTitle = this.name;
    this.question.questionOptions.push(this.questionOption1);
    this.question.questionOptions.push(this.questionOption2);
    this.question.questionOptions.push(this.questionOption3);
    this.question.questionOptions.push(this.questionOption4);
    console.log(this.question)
    this.questionService.updateQuestion( this.testId,this.qId,this.question).subscribe(data => {
      alert(data)
    }, err => {
      alert("Question Not Updated ")
    })
  }

}
