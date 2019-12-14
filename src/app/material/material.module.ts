import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatIconModule, MatButtonToggleModule, MatBadgeModule
} from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatBadgeModule
];

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
