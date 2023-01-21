import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http:HttpClient) { }

  getSurveyData(surveyId:String){
    let apiUrl = 'http://localhost:8080/v1/survey?surveyId='+surveyId;
    return this.http.get(apiUrl);
  }
}
