import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  langs: string[] = [];

  usuario: any;
  constructor(private fire: FirebaseService,private translateService: TranslateService) {
    this.langs = this.translateService.getLangs();
  }

  changeLang(event) {
    this.translateService.use(event.detail.value);
    console.log(event.detail.value)
  }

}
