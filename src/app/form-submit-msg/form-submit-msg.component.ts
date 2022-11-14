import { Component, OnInit } from '@angular/core';
import {FormdataserviceService} from "../service/formdataservice.service";
import {FormControl, FormGroupDirective, NgForm, NgModel, Validators} from "@angular/forms";
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form-submit-msg',
  templateUrl: './form-submit-msg.component.html',
  styleUrls: ['./form-submit-msg.component.css']
})
export class FormSubmitMsgComponent implements OnInit {
  allPageData: any;

  constructor(private formDataService: FormdataserviceService) {
    this.allPageData = formDataService.allPageData;
  }

  ngOnInit(): void {
  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();

  password: any;
}
