import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyRendererComponent } from './survey-renderer.component';

describe('SurveyRendererComponent', () => {
  let component: SurveyRendererComponent;
  let fixture: ComponentFixture<SurveyRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
