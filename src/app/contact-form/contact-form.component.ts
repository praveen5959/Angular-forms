import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"]
})
export class ContactFormComponent {
  myForm: FormGroup;
  post: any;
  name: string = "";
  father: string = "";
  gender = "Male, Female";
  maritial = "Single, Married";
  dob = "";
  nationality = "";
  status = "Resident Individual, Non Resident, Foreign National";
  pan = "";
  aadhar = "";
  identity = "";
  residence = "";
  city = "";
  pincode = "";
  state = "";
  country = "";
  telloff = "";
  tellres = "";
  mobile = "";
  email = "";
  proof_address = "";
  constructor(private fb: FormBuilder) {
    this.myForm = fb.group({
      name: [null, Validators.required],
      father: [null, Validators.required],
      gender: [this.gender, Validators.required],
      maritial: [this.maritial, Validators.required],
      dob: [null, Validators.required],
      nationality: [null, Validators.required],
      status: [this.status, Validators.required],
      pan: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern("^[A-Z].*[A-Z]$")
        ])
      ],
      aadhar: [null, Validators.nullValidator],
      identity: [null, Validators.required],
      residence: [null, Validators.required],
      city: [null, Validators.required],
      pincode: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6)
        ])
      ],
      state: [null, Validators.required],
      country: [null, Validators.required],
      telloff: [null],
      tellres: [null],
      mobile: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern("[0-9]{10}")
        ])
      ],
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern("[^@]*@[^@]*")
        ])
      ],
      proof_address: [null, Validators.required]
    });
    this.myForm.valueChanges.subscribe(console.log);
  }
  addPost(post) {
    this.name = post.name;
    this.father = post.father;
    this.gender = post.gender;
    this.maritial = post.maritial;
    this.dob = post.dob;
    this.nationality = post.nationality;
    this.status = post.status;
    this.pan = post.pan;
    this.aadhar = post.aadhar;
    this.identity = post.identity;
    this.residence = post.residence;
    this.city = post.city;
    this.pincode = post.pincode;
    this.state = post.state;
    this.country = post.country;
    this.telloff = post.telloff;
    this.tellres = post.tellres;
    this.mobile = post.mobile;
    this.email = post.email;
    this.proof_address = post.proof_address;
  }
}
