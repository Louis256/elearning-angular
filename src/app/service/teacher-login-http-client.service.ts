import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

export class TeacherInfo {
  constructor(
    public id: number,
    public firstname: string,
    public middlename: string,
    public lastname: string,
    public password: string,
    public dob: string,
    public emailid: string,
    public instname: string,
    public contactnumber: string,
    public addressline1: string,
    public addressline2: string,
    public city: string,
    public state: string,
    public country: string,
    public zipcode: string,
    public status: string,
    public createddate: string,
    public updateddate: string
  ) { }
}

export class User {
  constructor(
    public username: string,
    public password: string
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class TeacherLoginHttpClientService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public loginTeacher(user) {
    let username = 'hthangavel'
    let password = 'Password@123'

    console.log("Testing loginTeacher");
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.post<TeacherInfo>("http://localhost:8080/teacher/login", user, { headers });
  }

  public createTeacher(teacher) {
    let username = 'hthangavel'
    let password = 'Password@123'

    console.log("Testing createTeacher");
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.post<TeacherInfo>("http://localhost:8080/teacher/createorupdate", teacher, { headers });
  }

  public deleteTeacher(teacher) {
    let username = 'hthangavel'
    let password = 'Password@123'

    console.log("Testing deleteTeacher");
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.delete<TeacherInfo>("http://localhost:8080/teacher/delete/" + teacher.id, { headers });
  }

  public getAllTeachers() {
    let username = 'hthangavel'
    let password = 'Password@123'

    console.log("Testing GetAllTeachers");
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<TeacherInfo[]>('http://localhost:8080/teacher/getallteachers', { headers });
  }

}