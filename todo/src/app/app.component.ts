import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
  dataToPass = 'This content from app ( parent wi) component';
  dataFromParent="";

  addItem(ev) {
    this.dataFromParent = ev;
  }
}
