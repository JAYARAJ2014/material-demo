import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'material-demo';
  notifications = 2;
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
  ngOnInit(): void {
  }

  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
  }

}
