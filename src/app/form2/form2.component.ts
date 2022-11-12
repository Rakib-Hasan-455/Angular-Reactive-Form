import { Component, OnInit } from '@angular/core';
import {FormdataserviceService} from "../service/formdataservice.service";

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  page2: any;
  // picker: any;
  constructor(private formDataService: FormdataserviceService) {
    this.page2 = formDataService.allPageData.page2;
    // this.picker = formDataService.allPageData.page2.dateOfBirth;
  }

  ngOnInit(): void {
  }


  bloodGroups: any = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

  bdDistrict={
    "Gazipur":
      {"Kaliakair":{
        "Gazi Kal Thana 01":{
          "Gazi Kal 1 post 01":['Gazi kali 01 Vil 01', 'Gazi kali 01 Vil 02', 'Gazi kali 01 Vil 03'],
          "Gazi Kal 1 post 02":['Gazi kali 02 Vil 01', 'Gazi kali 02 Vil 02','Gazi kali 02 Vil 03'],
          },
          "Gazi Kal Thana 02":{
            "Gazi Kal 2 post 01":['Gazi kali 01 Vil 01', 'Gazi kali 01 Vil 02', 'Gazi kali 01 Vil 03'],
            "Gazi Kal 2 post 02":['Gazi kali 02 Vil 01', 'Gazi kali 02 Vil 02','Gazi kali 02 Vil 03'],
          }
        },
        "Sripor":{
          "Gazi sri Thana 01":{
            "Gazi sri 1 post 01":['Gazi kali 01 Vil 01', 'Gazi kali 01 Vil 02', 'Gazi kali 01 Vil 03'],
            "Gazi sri 1 post 02":['Gazi kali 02 Vil 01', 'Gazi kali 02 Vil 02','Gazi kali 02 Vil 03'],
          },
          "Gazi sri Thana 02":{
            "Gazi sri 2 post 01":['Gazi kali 01 Vil 01', 'Gazi kali 01 Vil 02', 'Gazi kali 01 Vil 03'],
            "Gazi sri 2 post 02":['Gazi kali 02 Vil 01', 'Gazi kali 02 Vil 02','Gazi kali 02 Vil 03'],
          }
          }
        },
    "Dhaka":
      {"Dhamrai":{
          "Dha Dham Thana 01":{
            "Dha Dham 1 post 01":['Gazi kali 01 Vil 01', 'Gazi kali 01 Vil 02', 'Gazi kali 01 Vil 03'],
            "Dhaka Dham 1 post 02":['Gazi kali 02 Vil 01', 'Gazi kali 02 Vil 02','Gazi kali 02 Vil 03'],
          },
          "Dha Dham Thana 02":{
            "Dha Dham 2 post 01":['Gazi kali 01 Vil 01', 'Gazi kali 01 Vil 02', 'Gazi kali 01 Vil 03'],
            "Dha Dham 2 post 02":['Gazi kali 02 Vil 01', 'Gazi kali 02 Vil 02','Gazi kali 02 Vil 03'],
          }
        },
        "Dhohar":{
          "Dha Dho Thana 01":{
            "Dha Dho 1 post 01":['Gazi kali 01 Vil 01', 'Gazi kali 01 Vil 02', 'Gazi kali 01 Vil 03'],
            "Dha Dho 1 post 02":['Gazi kali 02 Vil 01', 'Gazi kali 02 Vil 02','Gazi kali 02 Vil 03'],
          },
          "Dha Dho Thana 02":{
            "Dha Dho 2 post 01":['Gazi kali 01 Vil 01', 'Gazi kali 01 Vil 02', 'Gazi kali 01 Vil 03'],
            "Dha Dho 2 post 02":['Gazi kali 02 Vil 01', 'Gazi kali 02 Vil 02','Gazi kali 02 Vil 03'],
          }
        }
      },
  }

  upazillas: any;
  setUpazillas(data: any) {
    // @ts-ignore
    this.upazillas = this.bdDistrict[data];
  }
  thanas: any;
  setThanas(value: any) {
    // @ts-ignore
    this.thanas = this.upazillas[value];
  }

  postOffices: any;
  setPostOffice(value: any) {
    this.postOffices = this.thanas[value];
  }

  villages: any;
  setVillages(value: any) {
    this.villages = this.postOffices[value];
  }
}
