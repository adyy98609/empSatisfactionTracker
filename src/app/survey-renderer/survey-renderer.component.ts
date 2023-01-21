import { Component, OnInit } from '@angular/core';
import { Model } from "survey-core";
import { SurveyService } from '../survey.service';
import { json } from "./surveyJson";


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
      const surveyId ="f500ccf2-b916-48a2-bc86-c57680075674";
      this.data = this.surveyService.getSurveyData(surveyId).subscribe();
      const survey = new Model(this.data || json);
      survey.onComplete.add((sender, options) => {
          console.log(JSON.stringify(sender.data, null, 3));
      });
      this.model = survey;
  }
}
