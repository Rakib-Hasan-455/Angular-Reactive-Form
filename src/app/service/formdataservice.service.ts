import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormdataserviceService {

  constructor() {
  }

  allPageData: any = {
    page1: {
      id: "",
      personName: {
        prefix: "",
        firstName: "",
        lastName: "",
        suffix: ""
      },
      fatherInfo: {
        fullName: "",
        occupation: ""
      },
      motherInfo: {
        fullName: "",
        occupation: ""
      },
      presentAddress: {
        selectedOption: "bangladesh",
        bangladesh: {
          division: "",
          district: "",
          upazilla: "",
          policeStation: "",
          postOffice: "",
          postCode: "",
          village: ""
        },
        other: {
          country: "",
          city: "",
          state: "",
          postalCode: ""
        }
      },
      parmanentAddress: {
        selectedOption: "bangladesh",
        bangladesh: {
          division: "",
          district: "",
          upazilla: "",
          policeStation: "",
          postOffice: "",
          postCode: "",
          village: ""
        },
        other: {
          country: "",
          city: "",
          state: "",
          postalCode: ""
        }
      },
      mobileNo: "",
      phoneNo: [],
      emailAddr: [],
      gender: "",
      religion: "",
      nationality: ""
    },
    page2: {
      bloodGroup: "",
      medicalDisability: "",
      dateOfBirth: "",
      placeOfBirth: {
        selectedOption: "bangladesh",
        bangladesh: {
          division: "dhaka",
          district: "",
          upazilla: "",
          policeStation: "",
          postOffice: "",
          village: ""
        },
        other: {
          country: "",
          city: "",
          state: "",
          postalCode: ""
        }
      },
      nidNo: "",
      passportNo: "",
      maritalStatus: "",
      emergencyPerson: {
        name: "",
        address: "",
        mobileNo: "",
        relationship: ""
      }
    }
  }

}
