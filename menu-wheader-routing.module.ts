import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuWheaderPage } from './menu-wheader.page';

const routes: Routes = [
  {
    path: '',
    component: MenuWheaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuWheaderPageRoutingModule {}
