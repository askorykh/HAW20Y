import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AppMaterialModule} from "./app-material/app-material.module";
import { LoginDialogComponent } from './login/dialog/login-dialog/login-dialog.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {MAT_DIALOG_DEFAULT_OPTIONS} from "@angular/material";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  { path: 'login',      component: LoginComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginDialogComponent
  ],
  entryComponents: [
    LoginComponent,
    LoginDialogComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppMaterialModule
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false} } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
