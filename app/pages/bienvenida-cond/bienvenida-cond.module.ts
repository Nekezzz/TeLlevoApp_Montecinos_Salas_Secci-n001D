import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BienvenidaCondPageRoutingModule } from './bienvenida-cond-routing.module';

import { BienvenidaCondPage } from './bienvenida-cond.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BienvenidaCondPageRoutingModule
  ],
  declarations: [BienvenidaCondPage]
})
export class BienvenidaCondPageModule {}
