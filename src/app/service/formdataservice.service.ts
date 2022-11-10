import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormdataserviceService {

  constructor() { }

  allPageData: any = {
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
}

}
