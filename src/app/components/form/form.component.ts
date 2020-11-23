import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartItem } from '../../item.model';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  form: FormGroup;
  formArray: FormArray;
  ngOnInit(): void {
    this.formArray = this.fb.array([
      this.fb.group({
        item: this.fb.control('', [Validators.required]),
        qty: this.fb.control('', [Validators.required]),
        id: this.fb.control('', [Validators.required]),
      }),
    ]);
    this.form = this.fb.group({
      blk: this.fb.control(''),
      unitNo: this.fb.control(''),
      orders: this.formArray,
    });
  }

  addItem() {
    this.formArray.push(
      this.fb.group({
        item: this.fb.control('', [Validators.required]),
        qty: this.fb.control('', [Validators.required]),
        id: this.fb.control('', [Validators.required]),
      })
    );
  }
  onSubmit() {
    console.log(this.form.value);
  }
}
