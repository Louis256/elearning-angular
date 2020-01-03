import { Component, OnInit } from '@angular/core';
import { QuestionInfo, QuestionHttpClientService, Quizmodel } from 'src/app/service/question-http-client.service';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { PagerService } from 'src/app/service/pager.service';
import 'rxjs/add/operator/map';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-takecourse',
  templateUrl: './takecourse.component.html',
  styleUrls: ['./takecourse.component.css']
})

/** 
export class TakecourseComponent implements OnInit {
  questions: QuestionInfo[];
  user:{id: number};
  routeParams: Params;
  items = [];
  pageOfItems: Array<any>;

  // array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];


  constructor(
    private httpClientService:QuestionHttpClientService,
    public router: Router,
    private route: ActivatedRoute,
    private pagerService: PagerService
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
*/




/** 
export class TakecourseComponent implements OnInit {
  
  user:{id: number};
  routeParams: Params;
  myVar2 = false;
  
  constructor(private httpClientService:QuestionHttpClientService,
     private pagerService: PagerService,
     public router: Router,
     private route: ActivatedRoute,
     private formBuilder: FormBuilder
    ) { }

  // array of all items to be paged
  //private allItems: any[];
  private questions: QuestionInfo[];
  


  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  ngOnInit() {
      // get dummy data
      this.httpClientService.getQuestionByCourseId(+this.route.snapshot.params['courseid']).subscribe(
        response => { 
          this.questions = response; 
          
          
     
     // initialize to page 1
          this.setPage(1);
        }
       );
  }

  setPage(page: number) {
      if (page < 1 || page > this.pager.totalPages) {
          return;
      }

      // get pager object from service
      this.pager = this.pagerService.getPager(this.questions.length, page);

      // get current page of items
      this.pagedItems = this.questions.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  
  
  marked = false;
  theCheckbox = false;
  //newQuestion []: any;
  toggleVisibility(e){
    this.marked= e.target.checked;
    if(this.marked){
      console.log('1');
      //sessionStorage.setItem(this.questions.id,'A');
    }
    if(!this.marked){
      console.log('2');
    }
    //this.newQuestion=this.httpClientService.getQuestionByCourseId(+this.route.snapshot.params['courseid'])
  }

  studentSelectForm: FormGroup;
  getSelectAnswer(){
  this.studentSelectForm = this.formBuilder.group({
    opt1: [''],
    opt2: [],
    opt3:[],
    opt4:[] 
  });
  }


  
}
*/



export class TakecourseComponent implements OnInit {

  myarray: String[] = [];
  i: number = 0;
  languages: String[] = ["java", "cprogram", "C++", "Spring", "Html", "Asp.net"];
  newstr: String

  quizlist: Quizmodel[] = [
    {
      ID: 1, language: "java", question: "Inventor of c++?", anslistobj: ["Pavan.c", "James Gosling", "Richie Richie", "Amos.Emmanual"], answer: "Richie Richie"
    },
    {
      ID: 2, language: "java", question: "Inventor of java?", anslistobj: ["Nayan.c", "Ärmesh", "Denish Richie", "Kiran.DY"], answer: "Denish Richie"
    },
    {
      ID: 3, language: "java", question: "how is java?", anslistobj: ["Easy", "Difficult", "moderate", "nonoe"], answer: "Easy"
    },
    {
      ID: 4, language: "cprogram", question: "Inventor of cprogram?", anslistobj: ["a", "b", "c", "d"], answer: "a"
    },
    {
      ID: 5, language: "cprogram", question: "Inventor of cprogram?", anslistobj: ["a", "b", "c", "d"], answer: "b"
    }
  ];
  constructor(private httpClientService: QuestionHttpClientService,
    public router: Router,
    private route: ActivatedRoute,
  ) { }

  /******************************************************* */
  quizlength: number;
  selectedlanguage: Quizmodel[] = [];
  question: String;
  selectedvalue: String;
  options: any[];
  option1: String;
  option2: String;
  option3: String;
  option4: String;
  selectedlanques: any[];
  private correctanswer: any[];
  private questionid: any[];
  private questions: QuestionInfo[];

  ngOnInit() {
    //gettinglanguage() {
    /**   
    this.selectedlanques =  this.quizlist.filter(d => (d.language == this.selectedvalue));
    this.question = this.selectedlanques[0].question;
    this.option = this.selectedlanques[0].anslistobj;
    this.i = 0;
    this.quizlength = this.selectedlanques.length;
    */
    this.httpClientService.getQuestionByCourseId(+this.route.snapshot.params['courseid']).subscribe(
      response => {
        this.questions = response;
        //console.log(this.questions);
        //put all questiontext in array question[]
        this.question = this.questions[0].questiontext;
        //get opt1-opt4 and put them in array options[]
        this.option1 = this.questions[0].opt1;
        this.option2 = this.questions[0].opt2;
        this.option3 = this.questions[0].opt3;
        this.option4 = this.questions[0].opt4;
        this.options = new Array();
        this.options.push(this.option1, this.option2, this.option3, this.option4);

        
       //console.log(this.getCorrectAnswer(1));
       //console.log(this.generatemark());
       

        this.i = 0;
        this.quizlength = this.questions.length;
      });

  }

  /******************************************************** */
  next() {
    ++this.i;
    this.question = this.questions[this.i].questiontext;
    this.option1 = this.questions[this.i].opt1;
    this.option2 = this.questions[this.i].opt2;
    this.option3 = this.questions[this.i].opt3;
    this.option4 = this.questions[this.i].opt4;
    this.options = new Array();
    this.options.push(this.option1, this.option2, this.option3, this.option4);
    //console.log(this.selected(this.i));
    
    //sessionStorage.setItem('this.questions[this.i].id','');
    //console.log(this.answerkey[this.i].choosen);
    //console.log(sessionStorage.setItem('i','this.answerkey[i].answer'));
    //console.log(this.answerkey[this.i].choosen);
    this.answerkey = new Array();
    this.answerkey[this.i].answer;
    
  }
  previous() {
    --this.i;
    this.question = this.questions[this.i].questiontext;
    this.option1 = this.questions[this.i].opt1;
    this.option2 = this.questions[this.i].opt2;
    this.option3 = this.questions[this.i].opt3;
    this.option4 = this.questions[this.i].opt4;
    this.options = new Array();
    this.options.push(this.option1, this.option2, this.option3, this.option4);
  }

  /********************************************************* */
  //get correct answer and put it in array correctanswer
  getCorrectAnswer(indext: number) {
    this.correctanswer = new Array();
    for (var j = 0; j < this.questions.length; j++) {     
      this.correctanswer.push(this.questions[j].answer)
      //console.log(this.correctanswer);
    }
    return this.correctanswer[indext];
     
  }

  getQuestionId(indext: number) {
    this.questionid = new Array();
    for (var j = 0; j < this.questions.length; j++) {     
      this.questionid.push(this.questions[j].id)
      //console.log(this.questionid);
    }
    return this.questionid[indext];
     
  }



  answerkey: AnswerKey[] = [];

  check(e, str: String, answer: String) { 
    if (e.target.checked) {
      console.log("..................." + str + " " + answer);
      this.answerkey.push(new AnswerKey(str, answer));
      //this.questions.answer= str;
    }
    else {

      this.answerkey.splice(0, 1);
    }
    console.log(this.answerkey);
    this.recursivecheck();
  }
  ///////////////////////////////////

  marks: number = 0;
  generatemark() {
    for (var i = 0; i < this.answerkey.length; i++) {
      //if (this.answerkey[i].choosen == this.quizlist[i].answer) this.marks++;
      if (this.answerkey[i].choosen == this.getCorrectAnswer(i)) this.marks++;
      //console.log(this.getCorrectAnswer(i));
      //console.log(this.answerkey[i].choosen);
      
    }
    alert("your score is "+JSON.stringify(this.marks));
    //document.writeln("your score is " + this.marks);
  }

  ///////////////////////////////////

  recursivecheck() {
    var result1 = this.questions;
    var result2 = this.answerkey;

    var props = ['id', 'answer'];

    var result = result1.filter(function (o1) {
      // filter out (!) items in result2
      return result2.some(function (o2) {
        return o1.answer === o2.answer;
        // assumes unique id
      });

    }).map(function (o) {

      // use reduce to make objects with only the required properties
      // and map to apply this to the filtered array as a whole
      return props.reduce(function (newo, ans) {
        newo[ans] = o[ans];
        return newo;
      }, {});
    });
    console.log("result:" + JSON.stringify(result));
  }


  ifselected(i: number){
    if(this.answerkey.length<i)
    console.log('false');
  }

}

export class AnswerKey {
  public choosen: String;
  public answer: String;
  constructor(choosen: String, answer: String) {
    this.choosen = choosen;
    this.answer = answer;
  }

}
