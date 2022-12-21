import { Component, OnInit } from '@angular/core';

import { APIService, FeedbackTemplate } from "./services/API.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public feedbackTemplates: Array<FeedbackTemplate> = [];

  public sidebarForMobile: boolean = true;

  constructor(private api: APIService) {}

  async ngOnInit() {
    // await this.api.ListFeedbackTemplates().then((event) => {
    //   this.feedbackTemplates = event.items as FeedbackTemplate[];
    // });
  }

  setSidebar() {
    this.sidebarForMobile = !this.sidebarForMobile;
  }
}
