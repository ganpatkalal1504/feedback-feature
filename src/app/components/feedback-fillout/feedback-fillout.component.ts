import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { APIService, FeedbackElement, CreateFeedbackInput, CreateFeedbackTemplateInput, CreateFeedbackElementInput } from 'src/app/services/API.service';
import { Router } from '@angular/router';

interface IPayload {
  question: string;
  answers: any;
}

@Component({
  selector: 'app-feedback-fillout',
  templateUrl: './feedback-fillout.component.html',
  styleUrls: ['./feedback-fillout.component.scss']
})
export class FeedbackFilloutComponent {
  constructor(
    private route: ActivatedRoute,
    private api: APIService,
    private router: Router
  ) { }

  public form: FormGroup = new FormGroup({});

  public title: string = "";
  public feedbackElementIds: any = [];
  public feedbackElements: Array<FeedbackElement> = [];
  public mapedFeedbackElements: any = [];

  public formSubmitted: boolean = false;

  async ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.title = params['title'];
        this.feedbackElementIds = JSON.parse(params['elements']);
      });

    await this.api.ListFeedbackElements().then((event) => {
      this.feedbackElements = event.items as FeedbackElement[];;
    });

    this.feedbackElements.forEach(ele => {
      if (!ele._deleted && this.feedbackElementIds.includes(ele.id)) {
        let payload = JSON.parse(ele.payload);
        let obj = {
          id: ele.id,
          label: payload.question,
          type: ele.type,
          controlType: ele.type,
          options: payload.answers
        }
        this.mapedFeedbackElements?.push(obj);
      }
    });

    this.mapedFeedbackElements!.forEach((x: any) => {
      if (x.type == 'MULTIPLE_CHOICE') {
        this.form.addControl(x.id, new FormGroup({}))
        x.options.forEach((o: any) => {
          (this.form.get(x.id) as FormGroup).addControl(o.option, new FormControl(false))
        })
      }
      else {
        this.form.addControl(x.id, new FormControl('', null))
      }
    })
  }

  submitFeedbackFillout(value: any) {

    const valueIds = Object.keys(value);

    var minm = 10000;
    var maxm = 99999;
    const code = Math.floor(Math.random() * (maxm - minm + 1)) + minm;

    const payloadForFeedbackTemplate: CreateFeedbackTemplateInput = {
      title: this.title,
      code: code.toString(),
      userID: '123456',
    }
    this.api.CreateFeedbackTemplate(payloadForFeedbackTemplate).then((event) => {

      const payloadForFeedback: CreateFeedbackInput = {
        title: this.title,
        userID: '123456',
        feedbacktemplateID: event.id
      }
      this.api.CreateFeedback(payloadForFeedback).then((event) => {

        valueIds.forEach((id: any) => {
          const element = this.mapedFeedbackElements.find((x: any) => x.id == id);

          let objPayload;
          let answers = value[id];
          let answerKeys = Object.keys(answers);
          let ansArr: any = [];
          answerKeys.forEach(x => { ansArr.push({ "option": x, "solution": answers[x] }) })

          switch (element.type) {
            case 'QUESTION_ANSWER':
              objPayload = {
                "question": element.label,
                "answers": value[id]
              }
              break;
            case 'MULTIPLE_CHOICE':
              objPayload = {
                "question": element.label,
                "answers": ansArr
              }
              break;
            default:
              break;
          }

          const payloadForFeedbackElement: CreateFeedbackElementInput = {
            type: element.type,
            payload: JSON.stringify(objPayload),
            template: false,
            feedbackID: event.id
          }
          this.api.CreateFeedbackElement(payloadForFeedbackElement).then((event) => {

            this.formSubmitted = true;

            setTimeout(() => {
              this.router.navigate(['/']);
            }, 5000);
            console.log("last event", event);
          })
            .catch((e) => {
              console.log('error creating feedback element...', e);
            });
        })
      })
        .catch((e) => {
          console.log('error creating feedback ...', e);
        });
    })
      .catch((e) => {
        console.log('error creating feedback template...', e);
      });
  }
}
