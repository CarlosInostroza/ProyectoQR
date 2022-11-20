import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { QrPageRoutingModule } from './qr-routing.module';

import { QrPage } from './qr.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrPageRoutingModule,
    NgxQRCodeModule,TranslateModule
    
  ],
  declarations: [QrPage]
})
export class QrPageModule {}
