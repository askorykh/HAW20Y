import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatDialogModule, MatInputModule, MatListModule, MatCheckboxModule,
  MatFormFieldModule, MatSelectModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, MatCardModule, MatTableModule,
  MatPaginatorModule, MatDividerModule
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
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatDividerModule,
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
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatDividerModule,
    MatListModule
  ],
  declarations: []
})
export class AppMaterialModule { }
