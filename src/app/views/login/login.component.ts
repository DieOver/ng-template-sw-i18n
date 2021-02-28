import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private translateService: TranslateService,
    public languageService: LanguageService
  ) { }

  ngOnInit(): void {}

  showAlert(): void {
    const text = this.translateService.instant('LOGIN.ALERT.TEXT');
    alert(text);
  }

  changeLanguage(lng: string): void {
    this.languageService.setLanguage(lng);
  }

}
