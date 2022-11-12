import { Component, OnInit } from '@angular/core';
import {FormdataserviceService} from "../service/formdataservice.service";

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

}
