import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatecourseComponent } from './teacher/createcourse/createcourse.component';
import { CreatequestionComponent } from './teacher/createquestion/createquestion.component';
import { ViewallcoursesComponent } from './teacher/viewallcourses/viewallcourses.component';
import { ViewallcoursestoremovequestionsComponent } from './teacher/viewallcoursestoremovequestions/viewallcoursestoremovequestions.component';
import { RemovequestionComponent } from './teacher/removequestion/removequestion.component';
import { SelectcourseComponent } from './student/selectcourse/selectcourse.component';
import { TakecourseComponent } from './student/takecourse/takecourse.component';
import { ViewdashboardComponent } from './student/viewdashboard/viewdashboard.component';
import { CourseresultComponent } from './student/courseresult/courseresult.component';
import { HomeComponent } from './login/home/home.component';
import { StudentComponent } from './login/student/student.component';
import { TeacherComponent } from './login/teacher/teacher.component';
import { TeacherhomeComponent } from './teacher/teacherhome/teacherhome.component';
import { ViewallcoursestoupdatecourseComponent } from './teacher/viewallcoursestoupdatecourse/viewallcoursestoupdatecourse.component';
import { UpdatecourseComponent } from './teacher/updatecourse/updatecourse.component';
import { AddstudentComponent } from './register/addstudent/addstudent.component';
import { AddteacherComponent } from './register/addteacher/addteacher.component';


const routes: Routes = [
  { path: 'teacher/createcourse', component: CreatecourseComponent },
  { path: 'teacher/updatecourse/:courseid', component: UpdatecourseComponent },
  { path: 'teacher/addquestion/:courseid', component: CreatequestionComponent },
  { path: 'teacher/select-course-to-addquestion', component: ViewallcoursesComponent },
  { path: 'teacher/select-course-to-removequestion', component: ViewallcoursestoremovequestionsComponent },
  { path: 'teacher/select-course-to-updatecourse', component: ViewallcoursestoupdatecourseComponent },
  { path: 'teacher/removequestion/:courseid', component: RemovequestionComponent },
  { path: 'teacher/home', component: TeacherhomeComponent },
  { path: 'teacher/login', component: TeacherComponent },
  { path: 'student/selectcourse', component: SelectcourseComponent },
  { path: 'student/takecourse/:courseid', component: TakecourseComponent },
  { path: 'student/courseresult', component: CourseresultComponent },
  { path: 'student/viewdashboard', component: ViewdashboardComponent },
  { path: 'student/login', component: StudentComponent },
  { path: 'login/home', component: HomeComponent },
  { path: 'student/register', component: AddstudentComponent },
  { path: 'teacher/register', component: AddteacherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
