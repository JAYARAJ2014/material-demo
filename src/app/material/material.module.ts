import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule,  MatButtonToggleModule } from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule
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
