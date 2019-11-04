import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

export class StudentInfo {
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
export class StudentLoginHttpClientService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public loginStudent(user) {
    let username = 'hthangavel'
    let password = 'Password@123'

    console.log("Testing loginStudent");
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.post<StudentInfo>("http://localhost:8080/student/login", user, { headers });
  }

  public createStudent(student) {
    let username = 'hthangavel'
    let password = 'Password@123'

    console.log("Testing createStudent");
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.post<StudentInfo>("http://localhost:8080/student/createorupdate", student, { headers });
  }

  public deleteStudent(student) {
    let username = 'hthangavel'
    let password = 'Password@123'

    console.log("Testing deleteStudent");
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.delete<StudentInfo>("http://localhost:8080/student/delete/" + student.id, { headers });
  }

  public getAllStudents() {
    let username = 'hthangavel'
    let password = 'Password@123'

    console.log("Testing GetAllStudents");
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<StudentInfo[]>('http://localhost:8080/student/getallstudents', { headers });
  }

}