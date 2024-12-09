import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuWheaderPageRoutingModule } from './menu-wheader-routing.module';

import { MenuWheaderPage } from './menu-wheader.page';

import { HeaderCompComponent } from '../header-comp/header-comp.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuWheaderPageRoutingModule
  ],
  declarations: [MenuWheaderPage, HeaderCompComponent]
})
export class MenuWheaderPageModule {}
