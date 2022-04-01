import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  formdata: any;
  list: any[] = [];

  public index:number = 0;
  public store:any=[];
  completed: boolean=false;

  constructor(private formservice: FormService) { }

  ngOnInit(){
    this.getForm()
  }

  getForm() {
    this.formservice.getSurveyForm().subscribe(
    res => {
    this.formdata = res
    this.list = [];
    this.formdata.results.forEach((data: { incorrect_answers: any; correct_answer: any; options: any; }) => {
    
    const incorrectAnswers = data.incorrect_answers;
    const correctAnswer = data.correct_answer;

    let currentOptions = incorrectAnswers;
    currentOptions.push(correctAnswer);
    data.options = currentOptions;
    this.list.push(data);
    })
    });
  }

  saveResponses(data: any){
    this.store.push(data) 
    //  console.log(data);
  }

  Answer(currentIndex:number, option:any){ 
    if(option){  
      setTimeout(() => {
        this.index++;
        this.saveResponses(option)
      }, 1000);
      
    }else{  
      setTimeout(() => {                  
        this.index++;
        this.saveResponses(option)
      }, 1000);
    }

    if(currentIndex === this.list.length){
      setTimeout(() => {
        this.completed = true;
      }, 1000);
    }
  
}
}
