import { Component, OnInit } from "@angular/core";
import { SurveyCreatorModel } from "survey-creator-core";

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true,
  showJSONEditorTab: true,
  showPreviewTab: true
};

const defaultJson = {
  pages: [{
    name: "Name",
    elements: [{
      name: "FirstName",
      title: "Enter your first name:",
      type: "text"
    }, {
      name: "LastName",
      title: "Enter your last name:",
      type: "text"
    }]
  }]
};

@Component({
  selector: 'survey-creator-component',
  templateUrl: './survey-creator.component.html',
  styleUrls: ['./survey-creator.component.css']
})
export class SurveyCreatorComponent implements OnInit {
  surveyCreatorModel: any;
  ngOnInit() {
    const creator = new SurveyCreatorModel(creatorOptions);
    creator.text = window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);

    creator.saveSurveyFunc = (saveNo: number, callback: Function) => {
      window.localStorage.setItem("survey-json", creator.text);
      callback(saveNo, true);
       saveSurveyJson(
           "http://localhost:8080/v1/survey",
           creator.JSON,
           saveNo,
           callback
       );
    };
    console.log("Survey json ",creator.text)
    this.surveyCreatorModel = creator;
  }
}

 function saveSurveyJson(url: string | URL, json: object, saveNo: number, callback: Function) {
  const request = new XMLHttpRequest();
   request.open('POST', url);
   request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
   request.addEventListener('load', () => {
      callback(saveNo, true);
   });
   request.addEventListener('error', () => {
       callback(saveNo, false);
   });
   request.send(JSON.stringify(json));
 }
