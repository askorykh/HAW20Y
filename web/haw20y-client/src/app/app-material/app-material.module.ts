import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatDialogModule, MatInputModule, MatListModule, MatCheckboxModule,
  MatFormFieldModule, MatSelectModule, MatIconModule, MatDatepickerModule, MatNativeDateModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    MatListModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    MatListModule
  ],
  declarations: []
})
export class AppMaterialModule { }
