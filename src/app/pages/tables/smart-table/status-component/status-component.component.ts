import { Component, Input, OnInit } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';
@Component({
  selector: 'ngx-status-component',
  templateUrl: './status-component.component.html',
  styleUrls: ['./status-component.component.scss'],
})
export class StatusComponentComponent implements OnInit {



  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;
  color: any;

  constructor() { }

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();

    this.color = this.value === 'Live' ? 'green-bg' : 'red-bg';
  }


}


