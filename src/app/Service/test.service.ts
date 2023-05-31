import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Test } from '../test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  url:string="http://localhost:8081/api/test/"

  addTest(t: Test) {
    return this.http.post(this.url +"add",t);
  }
  getAllTest() {
    return this.http.get(this.url + "all");
  }
}
