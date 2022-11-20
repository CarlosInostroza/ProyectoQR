import { Component, OnInit } from '@angular/core';
import {NgxQrcodeElementTypes} from 'ngx-qrcode2'
@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  constructor() {}
  obj = {url:'www.google.cl', name:'gian', token:'23'}
  qrData = JSON.stringify(this.obj)
  elementType: NgxQrcodeElementTypes.CANVAS


  ngOnInit() {
  }

}
