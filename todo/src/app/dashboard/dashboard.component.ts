import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DataService } from '../dataservice/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() dataToPass;
  @Output() dataEvent = new EventEmitter<string>();

  servicedata:String;
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.servicedata = this.dataService.getData();
  }

  sendToParent()  {
    this.dataEvent.emit("Data to be sent to parent");
  }

}
