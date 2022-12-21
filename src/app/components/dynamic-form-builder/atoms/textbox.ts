import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

// text,email,tel,textarea,password, 
@Component({
    selector: 'textbox',
    template: `
        <input *ngIf="!field.multiline" [attr.type]="field.type" class="form-control"  [id]="field.id" [formControl]="form">
        <textarea *ngIf="field.multiline" [class.is-invalid]="isDirty && !isValid" [formControl]="form" [id]="field.id"
        rows="9" class="form-control" [placeholder]="field.placeholder"></textarea>
    `,
    styles: ['.form-control:focus { box-shadow: 0 0 0 0.25rem rgb(230 81 31 / 25%);} .form-control { box-sizing: border-box; width: 40%; height: 35px; background: #F5F5F5; border: 1px solid #C4C4C4; border-radius: 6px; margin-bottom: 20px} @media (max-width: 992px) { .form-control { width: 100% !important; } }']
})
export class TextBoxComponent {
    @Input() field: any = {};
    @Input() form: FormControl = new FormControl('', null);
    get isValid() { return this.form.valid; }
    get isDirty() { return this.form.dirty; }

    constructor() {

    }
}