import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatDialogModule, MatInputModule, MatListModule, MatCheckboxModule,
  MatFormFieldModule, MatSelectModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, MatCardModule, MatTableModule
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
    MatListModule,
    MatTableModule,
    MatCardModule,
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
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatListModule
  ],
  declarations: []
})
export class AppMaterialModule { }
