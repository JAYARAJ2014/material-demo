import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatSnackBar, MatDialog, MatTableDataSource } from '@angular/material';
import { CustomSnackBarComponent } from './custom-snack-bar.component';
import { ModelDialogComponent } from './model-dialog.component';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
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
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
  displayedColumnsData: string[] = ['position', 'name', 'symbol', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) {

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
  onKeyUp(filterValue: string) {
    console.log('entered ' + filterValue);
    this.dataSource.filter= filterValue.trim().toLowerCase();
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
    this.snackBar.openFromComponent(CustomSnackBarComponent, { duration: 2000 });
  }
  showDialog() {
    const dialogRef = this.dialog.open(ModelDialogComponent, { data: { name: 'Jayaraj' } });

    dialogRef.afterClosed().subscribe(result => { console.log(result); });
  }

  logData(row: any) {
    const dialogRef = this.dialog.open(ModelDialogComponent, {
      data:
      {
        name: 'Jayaraj',
        message: `Are you sure to delete  ${row.name}`,
        dialogTitle: 'Confirm Delete',
        yesText: 'Yes',
        noText: 'No'

      }
    });

    dialogRef.afterClosed().subscribe(result => { console.log(result); });
    console.log(row);
  }
}
