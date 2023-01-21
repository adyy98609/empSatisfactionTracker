import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SurveyCreatorModule } from 'survey-creator-angular';

import { AppComponent } from './app.component';
import { SurveyCreatorComponent } from './survey-creator/survey-creator.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdNavBasic } from "./ngbd-nav-basic";
import { RouterModule, Routes } from '@angular/router';
import { SurveyRendererComponent } from './survey-renderer/survey-renderer.component';
import { SurveyAnalyticsComponent } from './survey-analytics/survey-analytics.component';
import { SurveyModule } from "survey-angular-ui";
import { SurveyService } from './survey.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {path: 'survey-designer', component: SurveyCreatorComponent},
  {path: 'survey-renderer', component: SurveyRendererComponent},
  {path: 'survey-analytics', component: SurveyAnalyticsComponent},
  {path: '', redirectTo: '/survey-designer', pathMatch: 'full'}
];
 

@NgModule({
    declarations: [
        AppComponent,
        SurveyCreatorComponent,
        SurveyAnalyticsComponent,
        SurveyRendererComponent
    ],
    providers: [SurveyService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes,{enableTracing: true }),
        SurveyCreatorModule,
        NgbModule,
        NgbdNavBasic,
        RouterModule,
        SurveyModule,
        HttpClientModule
    ]
})
export class AppModule { }
