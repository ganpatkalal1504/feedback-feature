import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component'
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { FeedbackTemplateComponent } from './components/feedback-template/feedback-template.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FeedbackFilloutComponent } from './components/feedback-fillout/feedback-fillout.component';

import { DynamicFormBuilderModule } from './components/dynamic-form-builder/dynamic-form-builder.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FeedbackTemplateComponent,
    FeedbackComponent,
    FeedbackFilloutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AmplifyAuthenticatorModule,
    DynamicFormBuilderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
