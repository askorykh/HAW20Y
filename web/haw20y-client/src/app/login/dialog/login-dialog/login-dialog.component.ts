import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../../../models/dialog-data';
import {AppService} from '../../../app.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import { first } from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  private submitted: boolean;
  private loginForm: FormGroup;
  public hide = true;


  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private appService: AppService,
              private router: Router,
              private formBuilder: FormBuilder) {
    this.createLoginForm();
  }

  ngOnInit(): void { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  get formGroup() {
    return this.loginForm;
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group( {
      email: '',
      password: '',
      subject: '',
      message: ''
    });
    console.log(this.loginForm);
  }

  get form() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    this.appService.login(this.form.email.value, this.form.password.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['home']);
        },
        error => {
          // console.log('Invalid User!');
          console.log('Mock User!');
          this.router.navigate(['']);
        });
    this.onNoClick();
  }

  onRegister() {
    this.onNoClick();
    this.router.navigate(['register']);
  }

}
