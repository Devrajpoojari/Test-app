import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssigntestComponent } from './assigntest/assigntest.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListOfUserComponent } from './list-of-user/list-of-user.component';
import { ListofQuestionsComponent } from './listof-questions/listof-questions.component';
import { ListoftestComponent } from './listoftest/listoftest.component';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdatetestComponent } from './updatetest/updatetest.component';

const routes: Routes = [
  {
    path: 'homepage', component: HomepageComponent
  },
  { path: "", redirectTo: "homepage", pathMatch: "full" },
  {
    path: 'test', component: TestComponent
  },
  {
    path: 'question', component: QuestionComponent
  },
  {
    path: 'listoftest', component: ListoftestComponent
  },
  {
    path: 'update', component: UpdatetestComponent
  }, {
    path: 'listofquestion', component: ListofQuestionsComponent
  },
  {
    path: 'updateq', component: UpdateQuestionComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'listofusers', component: ListOfUserComponent
  },
  {
    path:'updateuser',component:UpdateUserComponent
  },
  {
    path:'assign',component:AssigntestComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
