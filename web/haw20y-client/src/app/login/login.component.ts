import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {LoginDialogComponent} from "./dialog/login-dialog/login-dialog.component";
import {User} from "../models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  private userData: User;

  private isLoginDialog: boolean;

  ngOnInit() {
  }

  openDialog(): void {
    this.dialog.closeAll();
    const dialogReference = this.dialog.open(LoginDialogComponent, <MatDialogConfig>{
      hasBackdrop: true,
      autoFocus: false,
      data: {isLoginDialog: this.isLoginDialog}
    });
    dialogReference.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  setDialogType(isLoginDialog: boolean) {
    this.isLoginDialog = isLoginDialog;
    this.openDialog();
  }

}
