import { Component, OnInit } from '@angular/core';
import { QuestionInfo, QuestionHttpClientService } from 'src/app/service/question-http-client.service';
import { Params, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-takecourse',
  templateUrl: './takecourse.component.html',
  styleUrls: ['./takecourse.component.css']
})
export class TakecourseComponent implements OnInit {
  questions: QuestionInfo[];
  user:{id: number};
  routeParams: Params;
  items = [];
  pageOfItems: Array<any>;

  constructor(
    private httpClientService:QuestionHttpClientService,
    public router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.httpClientService.getQuestionByCourseId(+this.route.snapshot.params['courseid']).subscribe(
      response => { this.questions = response; }
     );
    // an example array of 150 items to be paged
    this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}` }));
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
}
