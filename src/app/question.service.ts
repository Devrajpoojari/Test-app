import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:8081/api/question/";

  addQuestion(question: Question, id: any) {
    return this.http.post(this.url + "add/" + id, question, { responseType: 'text' });
  }
  listOfQuestions(id: any) {
    return this.http.get(this.url + 'all/' + id);
  }

  updateQuestion(testId: any, qId: any, question: Question) {
    return this.http.put(this.url + 'update/' + testId + "/" + qId, question, { responseType: 'text' });
  }
  getById(id:any):Observable<Question>{
    return this.http.get<Question>(this.url + 'get/' + id,{responseType:'json'});
  }
}
