import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { User, StudentLoginHttpClientService } from 'src/app/service/student-login-http-client.service';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  loginStudentForm: FormGroup;
  user: User = new User("", "");
  invalidLogin = false;
  submitted = false;

  constructor(
    private router: Router,
    private httpClientService: StudentLoginHttpClientService,
    private loginService: AuthenticationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    if (this.loginService.isUserLoggedIn()) {
      this.router.navigate(['/student/selectcourse'])
    }
    this.loginStudentForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginStudentForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginStudentForm.invalid) {
      return;
    }

    this.user.username = this.loginStudentForm.get("username").value;
    this.user.password = this.loginStudentForm.get("password").value;
    this.checkLogin(this.user);
  }

  checkLogin(user) {
    this.httpClientService.loginStudent(user).subscribe(
      data => {
        sessionStorage.setItem('username', this.user.username);
        if (sessionStorage.getItem('username') === this.user.username) {
          this.router.navigate(['/student/selectcourse'])
          this.invalidLogin = false
        } else {
          alert("Username & Password combination does not match. Please retry!!!");
          this.invalidLogin = true
        }
      },
      error => {
        alert("Username & Password combination does not match. Please retry!!!");
        this.invalidLogin = true
      });
  }

  navigateToAddStudent() {
    this.router.navigate(['/student/register']);
  }


}
