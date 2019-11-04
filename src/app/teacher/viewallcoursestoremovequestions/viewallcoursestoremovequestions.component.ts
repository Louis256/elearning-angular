import { Component, OnInit } from '@angular/core';
import { CourseInfo, CourseHttpClientService } from 'src/app/service/course-http-client.service';
import { Params, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewallcoursestoremovequestions',
  templateUrl: './viewallcoursestoremovequestions.component.html',
  styleUrls: ['./viewallcoursestoremovequestions.component.css']
})
export class ViewallcoursestoremovequestionsComponent implements OnInit {

  courses: CourseInfo[];
  user:{id: number};
  routeParams: Params;

  constructor ( 
    private httpClientService:CourseHttpClientService,
    public router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.httpClientService.getAllCourses().subscribe(
     response => { this.courses = response; }
    );
  }

  goToCourseDetails(course: CourseInfo) {
    this.router.navigate(['/teacher/removequestion', course.id]);
  }

}
