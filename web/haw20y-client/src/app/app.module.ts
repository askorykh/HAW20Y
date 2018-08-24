import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppMaterialModule} from "./app-material/app-material.module";
import { LoginDialogComponent } from './login/dialog/login-dialog/login-dialog.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MAT_DIALOG_DEFAULT_OPTIONS} from "@angular/material";
import {RouterModule, Routes} from "@angular/router";
import {AppService} from "./app.service";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {HomeComponent} from "./login/home.component";
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  { path: 'home',      component: HomeComponent },
  { path: 'register',      component: RegisterComponent },
  { path: '**', component: HomeComponent }
];

const _window = {provide: 'Window', useValue: window};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginDialogComponent,
    RegisterComponent
  ],
  entryComponents: [
    HomeComponent,
    LoginDialogComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    AppMaterialModule
  ],
  providers: [AppService, HttpClient, _window, {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
