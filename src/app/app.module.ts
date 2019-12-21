import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomSnackBarComponent } from './custom-snack-bar.component';
import { ModelDialogComponent } from './model-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomSnackBarComponent,
    ModelDialogComponent
  ],
  entryComponents:[CustomSnackBarComponent, ModelDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
