import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentInfo, StudentLoginHttpClientService } from 'src/app/service/student-login-http-client.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  registerStudentForm: FormGroup;
  student: StudentInfo = new StudentInfo(0, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
  submitted = false;

  constructor(
    private httpClientService: StudentLoginHttpClientService,
    public router: Router,
    private loginService: AuthenticationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.registerStudentForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      middlename: [],
      lastname: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      dob: ['', Validators.required],
      emailid: ['', [Validators.required, Validators.email]],
      instname: ['', Validators.required],
      contactnumber: ['', Validators.required],
      addressline1: ['', Validators.required],
      addressline2: [],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      zipcode: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerStudentForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerStudentForm.invalid) {
      return;
    }

    this.student.firstname = this.registerStudentForm.get("firstname").value;
    this.student.middlename = this.registerStudentForm.get("middlename").value;
    this.student.lastname = this.registerStudentForm.get("lastname").value;
    this.student.password = this.registerStudentForm.get("password").value;
    this.student.dob = this.registerStudentForm.get("dob").value;
    this.student.emailid = this.registerStudentForm.get("emailid").value;
    this.student.instname = this.registerStudentForm.get("instname").value;
    this.student.contactnumber = this.registerStudentForm.get("contactnumber").value;
    this.student.addressline1 = this.registerStudentForm.get("addressline1").value;
    this.student.addressline2 = this.registerStudentForm.get("addressline2").value;
    this.student.city = this.registerStudentForm.get("city").value;
    this.student.state = this.registerStudentForm.get("state").value;
    this.student.country = this.registerStudentForm.get("country").value;
    this.student.zipcode = this.registerStudentForm.get("zipcode").value;

    this.createStudent(this.student);
  }

  createStudent(student): void {
    this.httpClientService.createStudent(student).subscribe(data => {
      if (this.loginService.isUserLoggedIn()) {
        alert("Student record has been created successfully!!!");
        this.router.navigate(['student/viewall']);
      } else {
        alert("Student record has been created successfully!!! Please try to login now.");
        this.router.navigate(['student/login']);
      }
    });
  };
}
