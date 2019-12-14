import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatIconModule, MatButtonToggleModule, MatBadgeModule, MatProgressSpinnerModule
} from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatProgressSpinnerModule
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
