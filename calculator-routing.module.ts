import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculatorPage } from './calculator.page';

const routes: Routes = [
  {
    path: '',
    component: CalculatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculatorPageRoutingModule {}
