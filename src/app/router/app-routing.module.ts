import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeedbackTemplateComponent } from "../components/feedback-template/feedback-template.component";
import { FeedbackComponent } from "../components/feedback/feedback.component";
import { FeedbackFilloutComponent } from "../components/feedback-fillout/feedback-fillout.component";

const routes: Routes = [
  {
    path: 'feedback-template', component: FeedbackTemplateComponent
  },
  {
    path: 'feedback', component: FeedbackComponent
  },
  {
    path: 'feedback-fillout', component: FeedbackFilloutComponent
  },
  // { path: '',   redirectTo: '/feedback-template', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
