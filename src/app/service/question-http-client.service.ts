import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

export class QuestionInfo {
  constructor(
    public id: number,
    public questiontext: string,
    public questionimage: Blob,
    public opt1: string,
    public opt2: string,
    public opt3: string,
    public opt4: string,
    public answer: string, 
    public teacherid: number,
    public courseid: number,
    public status: string, 
    public createddate: string,
    public updateddate: string      
  ) { }
}

export class ShowQuestion {
  constructor(
    public questiontext: string,
    public questionimage: string,
    public opt1: string,
    public opt2: string,
    public opt3: string,
    public opt4: string,
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class QuestionHttpClientService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public createQuestion(question) {
    let username = 'hthangavel'
    let password = 'Password@123'

    console.log("Testing createCourse");
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.post<QuestionInfo>("http://localhost:8080/question/createorupdate", question, { headers });
  }

  public deleteQuestion(question) {
    let username = 'hthangavel'
    let password = 'Password@123'

    console.log("Testing deleteCourse");
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.delete<QuestionInfo>("http://localhost:8080/question/delete/" + question.id, { headers });
  }

  public getAllQuestions() {
    let username = 'hthangavel'
    let password = 'Password@123'

    console.log("Testing GetAllCourse");
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<QuestionInfo[]>('http://localhost:8080/question/getallquestions', { headers });
  }

  public getQuestionById(question) {
    let username = 'hthangavel'
    let password = 'Password@123'

    console.log("Testing GetCourseById");
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<QuestionInfo[]>("http://localhost:8080/question/get/id/"+ question.id, { headers });
  }

  public getQuestionByCourseId(courseid) {
    let username = 'hthangavel'
    let password = 'Password@123'

    console.log("Testing GetCourseByCourseId");
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<QuestionInfo[]>("http://localhost:8080/question/get/courseid/"+ courseid, { headers });
  }

  public getQuestionByTeacherId(question) {
    let username = 'hthangavel'
    let password = 'Password@123'

    console.log("Testing GetCourseByTeacherId");
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<QuestionInfo[]>("http://localhost:8080/question/get/teacherid/"+ question.id, { headers });
  }

  public uploadImage(file) {
    let username = 'hthangavel'
    let password = 'Password@123'

    console.log("Testing uploadImage");
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.post<FormData>("http://localhost:8080/question/uploadFile", file, { headers });
  }
}