import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/service/student-login-http-client.service';
import { Router } from '@angular/router';
import { TeacherLoginHttpClientService } from 'src/app/service/teacher-login-http-client.service';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  
  loginTeacherForm: FormGroup;
  user: User = new User("", "");
  invalidLogin = false;
  submitted = false;
  
  constructor(
    private router: Router,
    private httpClientService: TeacherLoginHttpClientService,
    private loginService: AuthenticationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    if (this.loginService.isUserLoggedIn()) {
      this.router.navigate(['/teacher/home'])
    }
    this.loginTeacherForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginTeacherForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginTeacherForm.invalid) {
      return;
    }

    this.user.username = this.loginTeacherForm.get("username").value;
    this.user.password = this.loginTeacherForm.get("password").value;
    this.checkLogin(this.user);
  }

  checkLogin(user) {
    this.httpClientService.loginTeacher(user).subscribe(
      data => {
        sessionStorage.setItem('username', this.user.username);
        if (sessionStorage.getItem('username') === this.user.username) {
          this.router.navigate(['/teacher/home'])
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

  navigateToAddTeacher() {
    this.router.navigate(['teacher/register']);
  }

  navigateToAddStudent() {
    this.router.navigate(['student/login']);
  }

}
