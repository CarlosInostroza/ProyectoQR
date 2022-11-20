import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http'
import { NgxQRCodeModule } from 'ngx-qrcode2';
import {BarcodeScanner} from '@awesome-cordova-plugins/barcode-scanner/ngx'
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpCliente: HttpClient) {
  return new TranslateHttpLoader(httpCliente, "../assets/i18n/",".json");
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(environment.firebaseConfig), HttpClientModule, AngularFireAuthModule,NgxQRCodeModule,
    HttpClientModule, TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },BarcodeScanner],
  bootstrap: [AppComponent],
})
export class AppModule {}
