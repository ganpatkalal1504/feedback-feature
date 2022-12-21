import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

import { APIService, FeedbackTemplate, CreateFeedbackTemplateInput, FeedbackElementEnum, CreateFeedbackElementInput } from "../../services/API.service";

export const FeedbackElementEnumLabelMapping: Record<FeedbackElementEnum, string> = {
  [FeedbackElementEnum.MULTIPLE_CHOICE]: "Multiple Choice",
  [FeedbackElementEnum.QUESTION_ANSWER]: "Question Answer",
  [FeedbackElementEnum.SCALE]: "Scale",
  [FeedbackElementEnum.VALUE]: "Value",
  [FeedbackElementEnum.WORDCLOUD]: "Wordcloud",
};

@Component({
  selector: 'feedback-template',
  templateUrl: './feedback-template.component.html',
  styleUrls: ['./feedback-template.component.scss']
})

export class FeedbackTemplateComponent {

  constructor(
    private formBuilder: FormBuilder,
    private api: APIService,
  ) { }

  public feedbackElementEnumLabels = FeedbackElementEnumLabelMapping;

  public feedbackElements = Object.values(FeedbackElementEnum);

  public step: number = 1;

  
  addFeedbackTemplateForm = this.formBuilder.group({
    title: ''
  });
  
  public feedbackElementAnswers = [{ text: '', checkbox: false }];

  addFeedbackElementForm = this.formBuilder.group({
    type: '',
    question: '',
    template: false,
    payload: this.formBuilder.array(this.feedbackElementAnswers.map(
      answer => this.formBuilder.group(answer)
    ))
  });

  onSubmitFeedbackTemplate(value: any) {

    var minm = 10000;
    var maxm = 99999;
    const code = Math.floor(Math.random() * (maxm - minm + 1)) + minm;

    const payload: CreateFeedbackTemplateInput = {
      title: value.title as string,
      code: code.toString(),
      userID: '123456',
    }
    // this.api.CreateFeedbackTemplate(payload).then((event) => {
    this.step = 2;
    // })
    //   .catch((e) => {
    //     console.log('error creating feedback template...', e);
    //   });
  }

  onSubmitFeedbackElement(value: any) {
    console.log(value);
  }

  get payload(): FormArray {
    return this.addFeedbackElementForm.get('payload') as FormArray;
  }

  nextStep(step: number) {
    this.step = step;
  }

  addAnswerField() {
    this.payload.push(this.formBuilder.group({
      text: '',
      checkbox: false
    }));
  }

  removeAnswerField(index: number): void {
    if (this.payload.length > 1) this.payload.removeAt(index);
    else this.payload.patchValue([{text: '', checkbox: false}]);
  }
}
