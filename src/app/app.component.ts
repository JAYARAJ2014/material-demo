import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { CustomSnackBarComponent } from './custom-snack-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'material-demo';
  notifications = 2;
  completed = false;
  selectedValue = '';
  // progressValue = 0;

  // showProgress() {
  //   this.progressValue += 1;
  //   setTimeout(() => {
  //     if (this.progressValue < 100) {
  //       this.showProgress();
  //     }
  //   }, 100);
  // }
  // ngOnInit(): void {
  //   this.showProgress();
  // }
  showSpinner = false;
  openedSideNav = false;

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  options = ['Angular', 'React', 'Vue', 'jQuery', 'knockout']
  // [{ name: 'Angular' },
  // { name: 'React' },
  // { name: 'Vue' }];
  shape: string;
  minDate = new Date(2019, 0, 1);
  maxDate = new Date(2019, 11, 31);
  constructor(private snackBar: MatSnackBar) {

  }
  ngOnInit(): void {

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  _filter(value: string): string[] {

    const filteredValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filteredValue));
  }

  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
  }

  logChange(idx: number) {
    console.log('Selected Tab is ' + idx);
  }

  setCompleted(p: boolean) {
    this.completed = true;

  }
  displayFn(subject) {
    return subject ? subject.name : undefined;
  }

  showSnackbar(message: string, action, ) {
    const snackBarRef = this.snackBar.open(message, action, { duration: 2000 });
    snackBarRef.afterDismissed().subscribe(() => {
      console.log('dismissed');
    });

    snackBarRef.onAction().subscribe(() => {
      console.log('Action Triggered');
    });
  }
  showCustomSnackbar() {
    this.snackBar.openFromComponent(CustomSnackBarComponent, {duration: 2000});
  }
}
