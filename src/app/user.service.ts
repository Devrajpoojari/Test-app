import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://localhost:8081/api/user/";
  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post(this.url + "add/", user, { responseType: 'text' });
  }
  update(user: User, uId:any) {
    return this.http.put(this.url + "update/" + uId, user);
  }
  assignTest(userId: any, testId: any) {
    return this.http.get(this.url + userId + "/" + testId);
  }
  login(uid: string, pass: string) {
    return this.http.get(this.url +"login/"+uid +"/" + pass,{responseType:'json'});
  }
  getAll(){
    return this.http.get(this.url +"all");
  }
}
