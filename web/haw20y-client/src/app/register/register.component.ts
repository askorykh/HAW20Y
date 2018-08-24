import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  countries = [{id: 1, name: 'Brazil'}, {id: 2, name: 'Moldova'}, {id: 3, name: 'Azerbaijan'}, {
    id: 4,
    name: 'Oleksiland'
  }, {id: 5, name: 'Saakerland'}];

  public registerForm: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder) {
    this.createRegisterForm();
  }

  ngOnInit() {
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      firstName: [''],
      email: [''],
      lastName: [''],
      enrollmentDate: [''],
      graduationDate: [''],
      password: [''],
      originCountry: [''],
      currentCountry: [''],
      currentJob: [''],
      agreeTerms: false
    });
  }

  onBackHome() {
    this.router.navigate(['home']);
  }

  onSubmitUser() {
  }

  onSubmit() {
    //Build here post request with the form's info.
  }
}
