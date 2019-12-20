import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

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
  options =['Angular' , 'React', 'Vue', 'jQuery', 'knockout']
    // [{ name: 'Angular' },
    // { name: 'React' },
    // { name: 'Vue' }];

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
}
