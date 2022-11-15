import { Component, OnInit } from '@angular/core';
import {FormdataserviceService} from "../service/formdataservice.service";
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, NgModel, Validators} from "@angular/forms";
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

  constructor(private formDataService: FormdataserviceService, private formBuilder: FormBuilder) {
    this.allPageData = formDataService.allPageData;
  }

  ngOnInit(): void {
  }

  matcher = new MyErrorStateMatcher();

  password: any;
  userFormGroup: FormGroup = this.formBuilder.group({
      email1FormControl: new FormControl('', [Validators.required, Validators.email]),
      email2FormControl: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9+_.-]+@(.+)$")])
  }

  );

  log() {
    console.log("Submitted");
  }
}
