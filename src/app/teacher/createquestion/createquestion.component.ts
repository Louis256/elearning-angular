import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { QuestionInfo, QuestionHttpClientService } from 'src/app/service/question-http-client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-createquestion',
  templateUrl: './createquestion.component.html',
  styleUrls: ['./createquestion.component.css']
})
export class CreatequestionComponent implements OnInit {

  questionForm: FormGroup;
  question: QuestionInfo = new QuestionInfo(0,"", null, "", "", "", "","", 0, 0,"","","");
  submitted = false;
  checkBoxValueoption1: boolean = false;
  checkBoxValueoption2: boolean = false;
  checkBoxValueoption3: boolean = false;
  checkBoxValueoption4: boolean = false;
  loading: boolean = false;
 
  constructor(
    private questionHttpClientService: QuestionHttpClientService,
    public router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {   
    this.questionForm = this.formBuilder.group({
      questiontext: [],
      questionimage: [''],
      option1: [],
      option2: [],
      option3: [],
      option4: [],
      answer: [],
      teacherid: [],
      courseid: []
      
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.questionForm.controls; } 
  /** 
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    //if (this.courseForm.invalid) {
    //  return;
    //}
    let formdata: FormData = new FormData();
    //formdata.append('questiontext',  this.questionForm.get('questiontext').value);
    //formdata.append('file',  this.questionForm.get('file').value);
    this.question.questiontext = this.questionForm.get("questiontext").value;
    //this.question.questionimage = this.questionForm.get("questionimage").value;
    //this.question.questionimage = this.questionForm.append("questionimage");
    //this.question.append('file', this.questionForm.get('file').value);
     this.question.opt1 = this.questionForm.get("option1").value;
     this.question.opt2 = this.questionForm.get("option2").value; 
     this.question.opt3 = this.questionForm.get("option3").value; 
     this.question.opt4 = this.questionForm.get("option4").value; 
    this.question.courseid = +this.route.snapshot.params['courseid'];
    //this.question.teacherid = +this.route.snapshot.params['teacherid'];
    //this.createQuestion(this.question);
    this.createQuestion(formdata);
  }*/
  onSubmit() {
    this.submitted = true;

   
    let formdata: FormData = new FormData();
    formdata.append('questiontext',  this.questionForm.get('questiontext').value);
    formdata.append('file',  this.questionForm.get('questionimage').value);
    formdata.append('opt1',  this.questionForm.get('option1').value);
    formdata.append('opt2',  this.questionForm.get('option2').value);
    formdata.append('opt3',  this.questionForm.get('option3').value);
    formdata.append('opt4',  this.questionForm.get('option4').value);
    formdata.append('courseid',  this.route.snapshot.params['courseid']);
    //formdata.append('teacherid',  this.questionForm.get('teacherid').value);
    
  
    this.createQuestion(formdata);
  }
  createQuestion(formdata): void {
  //createQuestion(question): void {
    this.questionHttpClientService.createQuestion(formdata).subscribe(data => {
        alert("Question record has been created successfully!!!");
        this.router.navigate(['/teacher/select-course-to-addquestion']);
      
    });
};

/** 
uploadDocument(event: any) {
  if (event.target.files && event.target.files[0]) {
    const reader = new FileReader();
    reader.onload = () => {
      this.questionForm.get('questionimage').setValue(event.target.files[0]);
    };
    reader.readAsDataURL(event.target.files[0]);
  }
}*/
/** 
onFileChange(event) {
  if(event.target.files.length > 0) {
    let file = event.target.files[0];
    this.questionForm.get('questionimage').setValue(file);
  }
}
*/
onFileChange(event) {
  if (event.target.files && event.target.files.length > 0) {
    const file = event.target.files[0];
    this.questionForm.get('questionimage').setValue(file);

    let fileName = file.name;
    //console.log(event.target.files[0].name);
    console.log(file.name);
  }
}
}
