import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddbarberoPageRoutingModule } from './addbarbero-routing.module';

import { AddbarberoPage } from './addbarbero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddbarberoPageRoutingModule
  ],
  declarations: [AddbarberoPage]
})
export class AddbarberoPageModule {}
