import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatecourseComponent } from './teacher/createcourse/createcourse.component';
import { HeaderComponent } from './header/header.component';
import { CreatequestionComponent } from './teacher/createquestion/createquestion.component';
import { ViewallcoursesComponent } from './teacher/viewallcourses/viewallcourses.component';
import { ViewallcoursestoremovequestionsComponent } from './teacher/viewallcoursestoremovequestions/viewallcoursestoremovequestions.component';
import { RemovequestionComponent } from './teacher/removequestion/removequestion.component';
import { SelectcourseComponent } from './student/selectcourse/selectcourse.component';
import { TakecourseComponent } from './student/takecourse/takecourse.component';
import { ViewdashboardComponent } from './student/viewdashboard/viewdashboard.component';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { CourseresultComponent } from './student/courseresult/courseresult.component';
import { HomeComponent } from './login/home/home.component';
import { StudentComponent } from './login/student/student.component';
import { TeacherComponent } from './login/teacher/teacher.component';
import { FooterComponent } from './footer/footer.component';
import { TeacherhomeComponent } from './teacher/teacherhome/teacherhome.component';
import { ViewallcoursestoupdatecourseComponent } from './teacher/viewallcoursestoupdatecourse/viewallcoursestoupdatecourse.component';
import { UpdatecourseComponent } from './teacher/updatecourse/updatecourse.component';
import { CourseHttpClientService } from './service/course-http-client.service';
import { QuestionHttpClientService } from './service/question-http-client.service';
import { AddstudentComponent } from './register/addstudent/addstudent.component';

import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddteacherComponent } from './register/addteacher/addteacher.component';
import { StudentLoginHttpClientService } from './service/student-login-http-client.service';
import { TeacherLoginHttpClientService } from './service/teacher-login-http-client.service';
import { AuthenticationService } from './service/authentication.service';
import { AuthguardService } from './service/authguard.service';


@NgModule({
  declarations: [
    AppComponent,
    CreatecourseComponent,
    HeaderComponent,
    CreatequestionComponent,
    ViewallcoursesComponent,
    ViewallcoursestoremovequestionsComponent,
    RemovequestionComponent,
    SelectcourseComponent,
    TakecourseComponent,
    ViewdashboardComponent,
    JwPaginationComponent,
    CourseresultComponent,
    HomeComponent,
    StudentComponent,
    TeacherComponent,
    FooterComponent,
    TeacherhomeComponent,
    ViewallcoursestoupdatecourseComponent,
    UpdatecourseComponent,
    AddstudentComponent,
    AddteacherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    HttpClientModule,
    FormsModule,
   
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    
    


  ],
  providers: [CourseHttpClientService,QuestionHttpClientService,StudentLoginHttpClientService,
  TeacherLoginHttpClientService,AuthenticationService,AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
