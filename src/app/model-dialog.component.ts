import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-model-dialog',
  templateUrl: './model-dialog.component.html',
  styles: []
})
export class ModelDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    
   }

  ngOnInit() {
  }

}
