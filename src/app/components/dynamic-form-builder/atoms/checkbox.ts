import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'checkbox',
    template: `
        <div [formGroup]="form" class="checkbox-container">
          <div *ngFor="let opt of field.options" class="form-check form-check">
          <label class="form-check-label">
             <input [formControlName]="opt.option" class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
             {{opt.option}}</label>
          </div>
      </div> 
    `,
    styles: ['label { font-family: "Poppins"; font-style: normal; font-weight: 500; font-size: 18px; line-height: 27px; color: #27292D; } .checkbox-container {margin-bottom: 20px} .form-check-label { font-weight: 400; font-size: 16px; line-height: 27px; color: #707070;} .form-check-input:focus { box-shadow: 0 0 0 0.25rem rgb(230 81 31 / 25%); } .form-check-input:checked { background-color: #E6511F; border-color: #E6511F; }']
})
export class CheckBoxComponent {
    @Input() field: any = {};
    @Input() form: FormGroup = new FormGroup({});
    get isValid() { return this.form.controls[this.field.id].valid; }
    get isDirty() { return this.form.controls[this.field.id].dirty; }
}