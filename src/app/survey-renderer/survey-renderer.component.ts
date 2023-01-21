import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Model } from "survey-core";
import { SurveyService } from '../survey.service';

@Component({
  selector: 'component-survey',
  templateUrl: './survey-renderer.component.html',
  styleUrls: ['./survey-renderer.component.css']
})
export class SurveyRendererComponent implements OnInit {

  model: any;
  data:any;

  constructor(private surveyService:SurveyService){}

  ngOnInit() {
    
      let surveyObj:any;
      let latestSurvey = localStorage.getItem('survey-json');
      if(latestSurvey){
        surveyObj= JSON.parse(latestSurvey);
      }
      this.surveyService.getSurveyData(surveyObj['surveyId']).subscribe((data=>{
       this.data = data;
       console.log("Data from service",this.data);
       const survey = new Model(this.data['data']);
      survey.onComplete.add((sender, options) => {
          console.log(JSON.stringify(sender.data, null, 3));
      });
      this.model = survey;
      }));
  }
  
}
