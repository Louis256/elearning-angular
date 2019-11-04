import { Component, OnInit } from '@angular/core';
import { QuestionInfo, QuestionHttpClientService } from 'src/app/service/question-http-client.service';
import { Params, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-removequestion',
  templateUrl: './removequestion.component.html',
  styleUrls: ['./removequestion.component.css']
})
export class RemovequestionComponent implements OnInit {

  questions: QuestionInfo[];
  user:{id: number};
  routeParams: Params;

  constructor ( 
    private httpClientService:QuestionHttpClientService,
    public router: Router,
    private route: ActivatedRoute
  ) { }
  /** 
  ngOnInit() {
    this.httpClientService.getAllQuestions().subscribe(
     response => { this.questions = response; }
    );
  }
  */

 ngOnInit() {
   
   const courseid = this.route.snapshot.paramMap.get('courseid') 
  this.httpClientService.getQuestionByCourseId(courseid).subscribe(
   response => { this.questions = response; }
  );
}
  deleteQuestion(question: QuestionInfo): void {
    console.log("calling deleQuestion");
    this.httpClientService.deleteQuestion(question).subscribe( data => {
        this.questions = this.questions.filter(u => u !== question);
      })
};
  /** 
  goToQuestionDetails(course: CourseInfo) {
    this.router.navigate(['/teacher/addquestion', course.id]);
  }
  */
}
