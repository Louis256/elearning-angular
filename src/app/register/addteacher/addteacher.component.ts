import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TeacherInfo, TeacherLoginHttpClientService } from 'src/app/service/teacher-login-http-client.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.css']
})
export class AddteacherComponent implements OnInit {

  registerTeacherForm: FormGroup;
  teacher: TeacherInfo = new TeacherInfo(0, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
  submitted = false;

  constructor(
    private httpClientService: TeacherLoginHttpClientService,
    public router: Router,
    private loginService: AuthenticationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.registerTeacherForm = this.formBuilder.group({
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
  get f() { return this.registerTeacherForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerTeacherForm.invalid) {
      return;
    }

    this.teacher.firstname = this.registerTeacherForm.get("firstname").value;
    this.teacher.middlename = this.registerTeacherForm.get("middlename").value;
    this.teacher.lastname = this.registerTeacherForm.get("lastname").value;
    this.teacher.password = this.registerTeacherForm.get("password").value;
    this.teacher.dob = this.registerTeacherForm.get("dob").value;
    this.teacher.emailid = this.registerTeacherForm.get("emailid").value;
    this.teacher.instname = this.registerTeacherForm.get("instname").value;
    this.teacher.contactnumber = this.registerTeacherForm.get("contactnumber").value;
    this.teacher.addressline1 = this.registerTeacherForm.get("addressline1").value;
    this.teacher.addressline2 = this.registerTeacherForm.get("addressline2").value;
    this.teacher.city = this.registerTeacherForm.get("city").value;
    this.teacher.state = this.registerTeacherForm.get("state").value;
    this.teacher.country = this.registerTeacherForm.get("country").value;
    this.teacher.zipcode = this.registerTeacherForm.get("zipcode").value;

    this.createTeacher(this.teacher);
  }

  createTeacher(teacher): void {
    this.httpClientService.createTeacher(teacher).subscribe(data => {
      if (this.loginService.isUserLoggedIn()) {
        alert("Student record has been created successfully!!!");
        this.router.navigate(['teacher/viewall']);
      } else {
        alert("Student record has been created successfully!!! Please try to login now.");
        this.router.navigate(['teacher/login']);
      }
    });
  };

}
