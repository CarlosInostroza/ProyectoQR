import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { ProfesorPageRoutingModule } from './profesor-routing.module';

import { ProfesorPage } from './profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesorPageRoutingModule,
    TranslateModule
  ],
  declarations: [ProfesorPage]
})
export class ProfesorPageModule {}
