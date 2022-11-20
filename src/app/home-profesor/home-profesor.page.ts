import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home-profesor',
  templateUrl: './home-profesor.page.html',
  styleUrls: ['./home-profesor.page.scss'],
})
export class HomeProfesorPage implements OnInit {

  langs: string[] = [];

  constructor(private translateService: TranslateService) {
    this.langs = this.translateService.getLangs();
  }
  ngOnInit() {
  }
  changeLang(event) {
    this.translateService.use(event.detail.value);
    console.log(event.detail.value)
  }
}
