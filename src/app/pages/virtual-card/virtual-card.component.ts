import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';



import { StatusComponent } from '../../components/status-component/status-component.component';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './virtual-card.component.html',
  styleUrls: ['./virtual-card.component.scss'],
})
export class VirtualCardComponent {

  settings = {
    hideSubHeader: true,
    actions: {
      add: false,
      edit: false,
      delete: false,
      position: 'right',
    } ,
    columns: {
      name: {
        title: 'Name',
        type: 'string',
        sort:false,
        filter: false
      },
      method: {
        title: 'Method',
        type: 'string',
        sort:false,
        filter: false
      },
      url: {
        title: 'URL',
        type: 'string',
        sort:false,
        filter: false
      },

      status: {
        title: 'Status',
        type: 'custom',
        renderComponent: StatusComponent,
        sort:false,
        filter: false
      },
      lastRequestTime: {
        title: 'Last Request Time',
        type: 'string',
        sort:false,
        filter: false
      },

    },
  };

  BASE_API_URL = "api.flutterwave.com"

  data = [

    {
      name: "Create New Virtual Card",
      method: "POST",
      url: "api.flutterwave.com/v3/virtual-cards",
      status: "Down",
      lastRequestTime: "10/02/20 11:00 AM",
      lastDownTime: "10/02/19 11:00 AM"
    } ,

    {
      name: "Get Virtual Cards",
      method: "GET",
      url: "api.flutterwave.com/v3/virtual-cards",
      status: "Live",
      lastRequestTime: "10/02/20 11:00 AM",
      lastDownTime: "10/02/19 11:00 AM"
    } ,
    {
      name: "Get A Virtual Card",
      method: "GET",
      url: "api.flutterwave.com/v3/virtual-cards/:id",
      status: "Down",
      lastRequestTime: "10/02/20 11:00 AM",
      lastDownTime: "10/02/19 11:00 AM"
    } ,
    {
      name: "Terminate Virtual Card",
      method: "PUT",
      url: "api.flutterwave.com/v3/virtual-cards/:id/terminate",
      status: "Live",
      lastRequestTime: "10/02/20 11:00 AM",
      lastDownTime: "10/02/19 11:00 AM"
    } ,
    {
      name: "Fund Virtual Card",
      method: "POST",
      url: "api.flutterwave.com/v3/virtual-cards/:id/fund",
      status: "Live",
      lastRequestTime: "10/02/20 11:00 AM",
      lastDownTime: "10/02/19 11:00 AM"
    } ,
    {
      name: "Get Virtual Card Transactions",
      method: "GET",
      url: "api.flutterwave.com/v3/virtual-cards/:id/transactions?from=&to=&index=&size=",
      status: "Live",
      lastRequestTime: "10/02/20 11:00 AM",
      lastDownTime: "10/02/19 11:00 AM"
    } ,
    {
      name: "Withdraw From Virtual Card",
      method: "POST",
      url: "api.flutterwave.com/v3/virtual-cards/:id/withdraw",
      status: "Live",
      lastRequestTime: "10/02/20 11:00 AM",
      lastDownTime: "10/02/19 11:00 AM"
    } ,
    {
      name: "Update Virtual Card Status",
      method: "PUT",
      url: "api.flutterwave.com/v3/virtual-cards/:id/status/:status_action",
      status: "Live",
      lastRequestTime: "10/02/20 11:00 AM",
      lastDownTime: "10/02/19 11:00 AM"
    } ,









  ]

  constructor() {
   // const data = this.service.getData();
  ///  this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
