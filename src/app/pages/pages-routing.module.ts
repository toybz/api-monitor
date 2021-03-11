import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import {ApiStatusComponent} from "./api-status/api-status.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'api-status/:category',
      component: ApiStatusComponent,
    },
    {
      path: '',
      redirectTo: 'api-status/charge',
      pathMatch: 'full',
    },

    {
      path: '**',
      redirectTo: 'api-status/charge',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
