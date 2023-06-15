import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListoftestComponent } from './listoftest/listoftest.component';
import { TestComponent } from './test/test.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { ContactusComponent } from './contactus/contactus.component';
import { QuestionComponent } from './question/question.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdatetestComponent } from './updatetest/updatetest.component';
import { ListofQuestionsComponent } from './listof-questions/listof-questions.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { RegisterComponent } from './register/register.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from './login/login.component';
import { ListOfUserComponent } from './list-of-user/list-of-user.component';
import { AssigntestComponent } from './assigntest/assigntest.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ListoftestComponent,
    TestComponent,
    AboutUsComponent,
    ContactusComponent,
    QuestionComponent,
    UpdatetestComponent,
    ListofQuestionsComponent,
    UpdateQuestionComponent,
    RegisterComponent,
    UpdateUserComponent,
    LoginComponent,
    ListOfUserComponent,
    AssigntestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule, FormsModule,
    MatButtonModule,
    HttpClientModule,
    MatSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
