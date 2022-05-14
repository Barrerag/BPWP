import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddbarberoPage } from './addbarbero.page';

const routes: Routes = [
  {
    path: '',
    component: AddbarberoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddbarberoPageRoutingModule {}
