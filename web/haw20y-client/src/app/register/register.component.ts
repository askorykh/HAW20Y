import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group( {
      email: '',
      firstName: '',
      lastName: '',
      enrollmentDate: '',
      graduationDate: '',
      password: '',
      originCountry: '',
      currentCountry: '',
      currentJob: '',
      agreeTerms: false
    });
  }

  onBackHome() {
    this.router.navigate(['home']);
  }

  onSubmitUser() { }
}
