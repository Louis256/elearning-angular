import { Component, OnInit } from '@angular/core';
import { CourseInfo, CourseHttpClientService } from 'src/app/service/course-http-client.service';
import { Params, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewallcoursestoupdatecourse',
  templateUrl: './viewallcoursestoupdatecourse.component.html',
  styleUrls: ['./viewallcoursestoupdatecourse.component.css']
})
export class ViewallcoursestoupdatecourseComponent implements OnInit {

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
    this.router.navigate(['/teacher/updatecourse', course.id]);
  }
}
