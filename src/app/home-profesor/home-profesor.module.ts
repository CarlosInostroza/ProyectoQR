import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { HomeProfesorPageRoutingModule } from './home-profesor-routing.module';

import { HomeProfesorPage } from './home-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeProfesorPageRoutingModule,
    TranslateModule
  ],
  declarations: [HomeProfesorPage]
})
export class HomeProfesorPageModule {}
