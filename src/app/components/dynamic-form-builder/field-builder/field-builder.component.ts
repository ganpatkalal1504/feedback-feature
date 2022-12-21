import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'field-builder',
  template: `
  <div class="form-group row" [formGroup]="form">
    <label class="form-control-label" [attr.for]="field.label">
      {{field.label}}
      <!-- <strong class="text-danger" *ngIf="field.required && form.get(field.id).invalid">*</strong> -->
    </label>
    <div [ngSwitch]="field.type">
      <textbox *ngSwitchCase="'QUESTION_ANSWER'" [field]="field" [form]="form.get(field.id)"></textbox>
      <checkbox *ngSwitchCase="'MULTIPLE_CHOICE'" [field]="field" [form]="form.get(field.id)"></checkbox>
      <!-- <div class="alert alert-danger my-1 p-2 fadeInDown animated" *ngIf="!isValid && isDirty">{{field.label}} is required</div> -->
    </div>
  </div>
  `,
  styles: ['label { font-family: "Poppins"; font-style: normal; font-weight: 500; font-size: 18px; line-height: 27px; color: #27292D; }']
})
export class FieldBuilderComponent implements OnInit {
  @Input() field: any;
  @Input() form: any;

  get isValid() { return this.form.controls[this.field.id].valid; }
  get isDirty() { return this.form.controls[this.field.id].dirty; }

  constructor() { }

  ngOnInit() {
  }

}
