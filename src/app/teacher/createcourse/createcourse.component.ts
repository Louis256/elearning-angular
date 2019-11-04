
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CourseHttpClientService, CourseInfo } from 'src/app/service/course-http-client.service';




@Component({
  selector: 'app-createcourse',
  templateUrl: './createcourse.component.html',
  styleUrls: ['./createcourse.component.css'],
  //providers:[CourseHttpClientService]
})
export class CreatecourseComponent implements OnInit {
  
  courseForm: FormGroup;
  course: CourseInfo = new CourseInfo(0,"", "", "", "", "", "","","","");
  submitted = false;
 
  constructor(
    private courseHttpClientService: CourseHttpClientService,
    public router: Router,
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
        alert("Course record has been created successfully!!!");
        this.router.navigate(['/teacher/select-course-to-addquestion']);
      
    });
};

  createStudent(student): void {
    
  };


}