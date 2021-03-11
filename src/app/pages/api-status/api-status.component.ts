import {Component, OnInit} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';



import { StatusComponent } from '../../components/status-component/status-component.component';
import {ActivatedRoute, NavigationEnd, NavigationError, NavigationStart, Router} from "@angular/router";
import {ApiService} from "../../services/api.service";
@Component({
  selector: 'ngx-api-status',
  templateUrl: './api-status.component.html',
  styleUrls: ['./api-status.component.scss']
})
export class ApiStatusComponent implements OnInit {

  settings = {
    hideSubHeader: true,
    actions: {
      add: false,
      edit: false,
      delete: false,
      position: 'right',
    } ,
    noDataMessage: 'Loading.......',
    columns: {
      name: {
        title: 'Name',
        type: 'string',
        sort:false,
        filter: false,
        valuePrepareFunction(data){
          let name = data.replace(/_/g, ' ')
          return  name.charAt(0).toUpperCase() + name.slice(1)
        }
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
      duration: {
        title: 'Duration',
        type: 'string',
        sort:false,
        filter: false,
        valuePrepareFunction(data){
          return data + 'ms'
        }
      },

    },
  };

  data: any = []

  constructor(private route: ActivatedRoute, private router: Router,   private apiService: ApiService) {

  }

  ngOnInit() {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator

        const url = event.url

        const category = url.substring(url.lastIndexOf('/') + 1)

        this.getApiStatus(category)
        console.log("Route  changed", category)
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        console.log(event.error);
      }
    });




    const routeParams = this.route.snapshot.paramMap;
    const category = routeParams.get('category');

    this.getApiStatus(category)


  }

  getApiStatus(category){

    this.apiService.getApiStatus(category).subscribe((res: any) => this.data =  res.data)

    console.log("New data", this.data)



  }





}
