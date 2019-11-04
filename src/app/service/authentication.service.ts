import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { StudentLoginHttpClientService } from './student-login-http-client.service';
import { TeacherLoginHttpClientService } from './teacher-login-http-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private router: Router,
    private studenthttpClientService: StudentLoginHttpClientService,
    private teacherhttpClientService: TeacherLoginHttpClientService

  ) { }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
