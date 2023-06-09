import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Question } from '../question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
  }
  name: string = "";

  questionOption1: string = "";
  questionOption2: string = "";
  questionOption3: string = "";
  questionOption4: string = "";
  questionOptions: string[] = [];
  testId:string=localStorage.getItem('testId');

  question: Question = new Question(0, this.questionOptions, "", 0, 0, 0, 0);


  public onValueChange(event: Event): void {
    const value = (event.target as any).value;
    this.name = value;
  }
  submit() {
    this.question.quesionTitle = this.name;
    this.question.questionOptions.push(this.questionOption1);
    this.question.questionOptions.push(this.questionOption2);
    this.question.questionOptions.push(this.questionOption3);
    this.question.questionOptions.push(this.questionOption4);
    console.log(this.question)
    this.questionService.addQuestion(this.question, this.testId).subscribe(data=>{
      alert(data)
    },err=>{
      alert("Question Not Added ")
    })
  }

}
