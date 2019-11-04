import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CourseInfo, CourseHttpClientService } from 'src/app/service/course-http-client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatecourse',
  templateUrl: './updatecourse.component.html',
  styleUrls: ['./updatecourse.component.css']
})
export class UpdatecourseComponent implements OnInit {

  courseForm: FormGroup;
  course: CourseInfo = new CourseInfo(0,"", "", "", "", "", "","","","");
  submitted = false;
 
  constructor(
    private courseHttpClientService: CourseHttpClientService,
    public router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {   
    this.courseForm = this.formBuilder.group({
      
      description: [],
      subscriptionfee: [],
      coursename: [],
      category: [],
      difficultylevel: [],
      active: []
      
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.courseForm.controls; } 

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    //if (this.courseForm.invalid) {
    //  return;
    //}
    this.course.id = +this.route.snapshot.params['courseid'];
    this.course.description = this.courseForm.get("description").value;
    this.course.subscriptionfee = this.courseForm.get("subscriptionfee").value;
    //this.course.teacherid = this.courseForm.get("teacherid").value;
    this.course.coursename = this.courseForm.get("coursename").value;
    this.course.category = this.courseForm.get("category").value;
    this.course.difficultylevel = this.courseForm.get("difficultylevel").value;
    this.course.active = this.courseForm.get("active").value;
    this.createCourse(this.course);
  }

  createCourse(course): void {
    this.courseHttpClientService.createCourse(course).subscribe(data => {
        alert("Update course successfully!!!");
        this.router.navigate(['/teacher/select-course-to-addquestion']);
      
    });
};
}
