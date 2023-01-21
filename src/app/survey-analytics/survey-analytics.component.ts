import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { VisualizationPanel } from 'survey-analytics';
import { Model } from 'survey-core';

const surveyJson = {
  elements: [{
    name: "satisfaction-score",
    title: "Based on interpersonal relationships, culture and work environment, how satisfied are you with the company's work culture?",
    type: "rating",
    choices: [
      { value: 5, text: "Fully satisfying" },
      { value: 4, text: "Generally satisfying" },
      { value: 3, text: "Neutral" },
      { value: 2, text: "Rather unsatisfying" },
      { value: 1, text: "Not satisfying at all" }
    ],
    isRequired: true
  }, {
    name: "que-2",
    title: "Do you think the environment at work helps you strike the right balance between your work life and personal life?",
    type: "boolean",
  },
  {
    name: "que-3",
    title: "Do you receive constructive feedback from your manager?",
    type: "boolean",
  },
  {
    name: "que-4",
    title: "Does your manager praise you when you have done a good job?",
    type: "boolean",
  },
  {
    name: "que-5",
    title: " On a scale of 1 to 5, how much happy are you with current hybrid culture? ",
    type: "rating",
  },
  {
    name: "que-6",
    title: "Do you wish to express your inputs ?",
    type: "comment",
  }
 
],
  showQuestionNumbers: "off",
  completedHtml: "Thank you for your feedback!",
};

const surveyResults = [{
  "satisfaction-score": 5,
  "que-2": "Yes",
  "que-3":"Yes",
  "que-4":"Yes",
  "que-5":5,
  "que-6":"No I don't"
}, {
  "satisfaction-score": 5,
  "que-2": "Yes",
  "que-3":"Yes",
  "que-4":"Yes",
  "que-5":5,
  "que-6":"No I don't"
}, {
  "satisfaction-score": 3,
  "que-2": "Yes",
  "que-3":"Yes",
  "que-4":"Yes",
  "que-5":5,
  "que-6":"No I don't"
}, {
  "satisfaction-score": 3,
  "que-2": "Yes",
  "que-3":"Yes",
  "que-4":"Yes",
  "que-5":5,
  "que-6":"No I don't"
}, {
  "satisfaction-score": 2,
  "que-2": "Yes",
  "que-3":"Yes",
  "que-4":"Yes",
  "que-5":5,
  "que-6":"No I don't"
}];

const vizPanelOptions = {
  allowHideQuestions: false
}

@Component({
  selector: 'app-survey-analytics',
  templateUrl: './survey-analytics.component.html',
  styleUrls: ['./survey-analytics.component.css']
})
export class SurveyAnalyticsComponent implements AfterViewInit{
  
  title = 'SurveyJS Analytics for Angular';
  @ViewChild("surveyVizPanel") elem: ElementRef | undefined;

  ngAfterViewInit(): void {
    const survey = new Model(surveyJson);
    const vizPanel = new VisualizationPanel(
      survey.getAllQuestions(),
      surveyResults,
      vizPanelOptions
    );
    vizPanel.showHeader = false;
    vizPanel.render(this.elem?.nativeElement);
  }
}
