import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ListofQuestionsComponent } from './listof-questions/listof-questions.component';
import { ListoftestComponent } from './listoftest/listoftest.component';
import { QuestionComponent } from './question/question.component';
import { TestComponent } from './test/test.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { UpdatetestComponent } from './updatetest/updatetest.component';

const routes: Routes = [
  {
    path :'homepage',component:HomepageComponent
  },
  { path: "", redirectTo: "homepage", pathMatch: "full" },
  {
    path :'test',component:TestComponent
  },
  {
    path :'question',component:QuestionComponent
  },
  {
    path :'listoftest',component:ListoftestComponent
  },
  {
    path:'update',component:UpdatetestComponent
  },{
    path:'listofquestion',component:ListofQuestionsComponent
  },
  {
    path:'updateq',component:UpdateQuestionComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
