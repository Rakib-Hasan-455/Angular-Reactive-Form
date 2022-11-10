import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {FormdataserviceService} from "../service/formdataservice.service";

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  phoneNumbers: any = [];
  emailAddresses: any = [];
  selectedPhoneCode: any = [];
  // Multiple Phone Number
  addOnBlur = true;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  addPhoneNumber(event: MatChipInputEvent): void {
    var value = (event.value || '').trim();
    // Add our phone
    if (value) {
      this.phoneNumbers.push({number: this.selectedPhoneCode.code+value, countryPhoneCode: this.selectedPhoneCode});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  removePhoneNumber(phoneNumbers: any): void {
    const index = this.phoneNumbers.indexOf(phoneNumbers);

    if (index >= 0) {
      this.phoneNumbers.splice(index, 1);
    }
  }

  addEmail(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our email
    if (value) {
      this.emailAddresses.push({emailAddress: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  removeEmail(emailAddr: any): void {
    const index = this.emailAddresses.indexOf(emailAddr);

    if (index >= 0) {
      this.emailAddresses.splice(index, 1);
    }
  }

  page1:any;
// give phoneNo: any = arrayList of code, countryName
  constructor(formDataService: FormdataserviceService) {
    this.page1 = formDataService.allPageData;
  }

  personOccupation = [
    {id:0, occupation: "Govt. Service Holder"},
    {id:1, occupation:"Army Officer"},
    {id:2, occupation:"Teacher"}
  ];

  countries = [
    "America", "Canada", "Australia"
  ];

  countryCallCode = [
    { code: "+12", name: "United States" },
    { code: "+13", name: "Australia" },
    { code: "+14", name: "Canada" },
    { code: "+15", name: "Brazil" },
    { code: "+16", name: "England" },
    { code: "+880", name: "Bangladesh" }
  ];

  presentAddrDivisionToDistrictData: any;
  setSelectedDivisionToDistrict() {
    for(let division of this.bdAddressData) {
      // console.log(division.divisionName + " xxx "+this.page1.presentAddress.bangladesh.division)
      if(division.divisionName == this.page1.presentAddress.bangladesh.division) {
        this.presentAddrDivisionToDistrictData = division.districtData;
      }
    }
  }

  presentAddrDistrictToUpazillaData: any;
  setSelectedDistrictToUpazilla() {
    for(let district of this.presentAddrDivisionToDistrictData) {
      if(district.name == this.page1.presentAddress.bangladesh.district) {
        this.presentAddrDistrictToUpazillaData = district.upazillaData;
      }
    }
  }

  presentAddrUpazillaToPoliceStationData: any;
  setUpazillaToPoliceStationData() {
    for(let upazilla of this.presentAddrDistrictToUpazillaData) {
      if(upazilla.name == this.page1.presentAddress.bangladesh.upazilla) {
        this.presentAddrUpazillaToPoliceStationData = upazilla.policeStationData;
      }
    }
  }

  presentAddrPoliceStationToPostOffice: any;
  setPoliceStationToPostOffice() {
    for(let PoliceStation of this.presentAddrUpazillaToPoliceStationData) {
      if(PoliceStation.name == this.page1.presentAddress.bangladesh.policeStation) {
        this.presentAddrPoliceStationToPostOffice = PoliceStation.postOfficeData;
      }
    }
  }

  presentAddrPostOfficeToVillage: any;
  setPostOfficeToVillage() {
    for(let postOffice of this.presentAddrPoliceStationToPostOffice) {
      if(postOffice.name == this.page1.presentAddress.bangladesh.postOffice) {
        this.presentAddrPostOfficeToVillage = postOffice.village;
      }
    }
  }



  bdAddressData = [
    {
     divisionName: "Dhaka",
     districtData: [
        {
          name: "dhaka",
          upazillaData: [
            {
              name: "Dhamrai",
              policeStationData: [
                {
                  name: "Dhamrai Thana",
                  postOfficeData: [
                    {
                      name: "Post Office X",
                      postCode: "1023",
                      village: [{
                        name: "village x"
                      },
                      {
                        name: "village y"
                      },
                      {
                        name: "village z"
                      }
                      ]
                    },
                    {
                      name: "Post Office Y",
                      postCode: "3100",
                      village: [{
                        name: "village xx"
                      },
                      {
                        name: "village yy"
                      },
                      {
                        name: "village zz"
                      }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: "Banani",
              policeStationData: [
                {
                  name: "Banani Thana",
                  postOfficeData: [
                    {
                      name: "Post Office X",
                      postCode: "120",
                      village: [{
                        name: "village x"
                      },
                      {
                        name: "village y"
                      },
                      {
                        name: "village z"
                      }
                      ]
                    },
                    {
                      name: "Post Office Y",
                      postCode: "110",
                      village: [{
                        name: "village xx"
                      },
                      {
                        name: "village yy"
                      },
                      {
                        name: "village zz"
                      }
                      ]
                    }
                  ]
                },
                {
                  name: "Banani Y Thana",
                  postOfficeData: [
                    {
                      name: "Banani Post Office X",
                      postCode: "100",
                      village: [{
                        name: "Banani village x"
                      },
                      {
                        name: "Banani village y"
                      },
                      {
                        name: "Banani village z"
                      }
                      ]
                    },
                    {
                      name: "Banani Post Office Y",
                      postCode: "1320",
                      village: [{
                        name: "Banani village xx"
                      },
                      {
                        name: "Banani village yy"
                      },
                      {
                        name: "Banani village zz"
                      }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: "khilkhet",
          upazillaData: [
            {
              name: "Khilkhet xx",
              policeStationData: [
                {
                  name: "Khilkhet x Thana",
                  postOfficeData: [
                    {
                      name: "Post Office sdX",
                      postCode: "11700",
                      village: [{
                        name: "village sdfx"
                      },
                      {
                        name: "village dfy"
                      },
                      {
                        name: "village sdfz"
                      }
                      ]
                    },
                    {
                      name: "Post Office dfY",
                      postCode: "1220",
                      village: [{
                        name: "village xax"
                      },
                      {
                        name: "village ydfy"
                      },
                      {
                        name: "village dfzz"
                      }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: "khilkhet abc",
              policeStationData: [
                {
                  name: "khilkhet abc Thana",
                  postOfficeData: [
                    {
                      name: "Post Office dsfX",
                      postCode: "112",
                      village: [{
                        name: "village xfd"
                      },
                      {
                        name: "village dfy"
                      },
                      {
                        name: "village zdsf"
                      }
                      ]
                    },
                    {
                      name: "Post Office dsfY",
                      postCode: "3500",
                      village: [{
                        name: "village xsdx"
                      },
                      {
                        name: "village ydsfy"
                      },
                      {
                        name: "village zdz"
                      }
                      ]
                    }
                  ]
                },
                {
                  name: "khilkhet Y Thana",
                  postOfficeData: [
                    {
                      name: "khilkhet Post Office Xx",
                      postCode: "2300",
                      village: [{
                        name: "khilkhet village xd"
                      },
                      {
                        name: "khilkhet village ydf"
                      },
                      {
                        name: "khilkhet village zdsf"
                      }
                      ]
                    },
                    {
                      name: "khilkhet Post Office Ydsf",
                      postCode: "1120",
                      village: [{
                        name: "khilkhet village xxdf"
                      },
                      {
                        name: "khilkhet village ysdfy"
                      },
                      {
                        name: "khilkhet village zdfz"
                      }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
     }
  ]

  notNumber(): boolean {

    return isNaN(Number(this.page1.id));
  }

}
