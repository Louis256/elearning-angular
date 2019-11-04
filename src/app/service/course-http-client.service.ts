import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

export class CourseInfo {
  constructor(
    public id: number,
    public description: string,    
    public teacherid: string,
    public subscriptionfee: string,
    public createddate: string,
    public updateddate: string,
    public coursename: string,
    public category: string,
    public difficultylevel: string,
    public active: string
  ) { }
}

export class ShowCourse {
  constructor(
    public description: string,
    public subscriptionfee: string
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class CourseHttpClientService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public createCourse(course) {
    let username = 'hthangavel'
    let password = 'Password@123'

    console.log("Testing createCourse");
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.post<CourseInfo>("http://localhost:8080/course/createorupdate", course, { headers });
  }

  public deleteCourse(course) {
    let username = 'hthangavel'
    let password = 'Password@123'

    console.log("Testing deleteCourse");
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.delete<CourseInfo>("http://localhost:8080/course/delete/" + course.id, { headers });
  }

  public getAllCourses() {
    let username = 'hthangavel'
    let password = 'Password@123'

    console.log("Testing GetAllCourse");
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<CourseInfo[]>('http://localhost:8080/course/getallcourses', { headers });
  }

  public getCourseById(course) {
    let username = 'hthangavel'
    let password = 'Password@123'

    console.log("Testing GetCourseById");
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<CourseInfo[]>("http://localhost:8080/course/get/id/"+ course.id, { headers });
  }

}