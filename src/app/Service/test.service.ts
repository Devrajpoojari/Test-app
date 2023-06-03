import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Test } from '../test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:8081/api/test/"

  addTest(t: Test) {
    return this.http.post(this.url + "add", t);
  }
  getAllTest() {
    return this.http.get(this.url + "all");
  }
  deleteTest(num: any) {
    return this.http.delete(this.url + "delete/" + num);
  }
  getTestById(num: any) {
    return this.http.get(this.url + num);
  }

  updateTest(test: Test) {
    return this.http.put(this.url + "update", test);
  }
}
