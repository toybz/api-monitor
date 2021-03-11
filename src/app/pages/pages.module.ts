import { NgModule } from '@angular/core';
import {NbCardModule, NbIconModule, NbInputModule, NbMenuModule, NbTreeGridModule} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import {Ng2SmartTableModule} from "ng2-smart-table";

import { ApiStatusComponent } from './api-status/api-status.component';

@NgModule({
  imports: [
    NbCardModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    NbIconModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
  ],
  declarations: [
    PagesComponent,
      ApiStatusComponent
  ],
})
export class PagesModule {
}
