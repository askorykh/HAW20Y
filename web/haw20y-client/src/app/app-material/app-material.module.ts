import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatDialogModule, MatInputModule} from "@angular/material";
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  declarations: []
})
export class AppMaterialModule { }
