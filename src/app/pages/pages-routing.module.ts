import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import {VirtualCardComponent} from "./virtual-card/virtual-card.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'virtual-card',
      component: VirtualCardComponent
    },
    {
      path: '',
      redirectTo: 'virtual-card',
      pathMatch: 'full',
    },
    {
      path: '**',
      redirectTo: 'virtual-card',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
