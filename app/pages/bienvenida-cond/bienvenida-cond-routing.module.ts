import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BienvenidaCondPage } from './bienvenida-cond.page';

const routes: Routes = [
  {
    path: '',
    component: BienvenidaCondPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BienvenidaCondPageRoutingModule {}
