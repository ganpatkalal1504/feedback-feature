import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService, FeedbackTemplate, FeedbackElement, ModelBooleanInput, ModelFeedbackElementFilterInput, ModelFeedbackTemplateFilterInput } from "../../services/API.service";

interface IPayload {
  question: string;
  answers: any;
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  public feedbackElement: Array<FeedbackElement> = [];
  public feedbackTitle: string = "";
  public questionIds: any = [];
  public formSubmitted: boolean = false;

  constructor(
    private api: APIService,
    private router: Router
  ) { }

  async ngOnInit() {
    let filter: ModelFeedbackElementFilterInput = {
      template: {
        eq: true
      }
    }
    await this.api.ListFeedbackElements(filter).then((event) => {
      this.feedbackElement = event.items as FeedbackElement[];
    });

    this.feedbackElement.forEach(ele => {
      ele.payload = JSON.parse(ele.payload);
    });
  }

  submitFeedbackForm() {
    this.formSubmitted = true;
  }

  redirectToFillout() {
    this.router.navigate(['/feedback-fillout'], { queryParams: { title: this.feedbackTitle, elements: JSON.stringify(this.questionIds) } });
  }

  onCheck(id: any) {
    if (!this.questionIds.includes(id)) {
      this.questionIds.push(id);
    } else {
      var index = this.questionIds.indexOf(id);
      if (index > -1) {
        this.questionIds.splice(index, 1);
      }
    }
  }

  setPayload(payload: any) {
    let abc: IPayload = payload;
    return abc;
  }
}
