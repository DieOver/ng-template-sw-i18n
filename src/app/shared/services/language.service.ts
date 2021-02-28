import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { ILANGUAGE } from '../models/ILANGUAGE';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(
    private translateService: TranslateService
  ) { }

  setInitialAppLanguage() {
    const val = localStorage.getItem(environment.language.LNG_KEY);
    this.setLanguage(val ?? this.translateService.getBrowserLang());
  }

  getLanguages(): Array<ILANGUAGE> {
    const languages: ILANGUAGE[] = [
      { text: this.translateService.instant('LNG.EN.TEXT'), value: 'en' },
      { text: this.translateService.instant('LNG.PT.TEXT'), value: 'pt' }
    ];
    return languages;
  }

  setLanguage(lng: string) {
    this.translateService.use(lng);
    localStorage.setItem(environment.language.LNG_KEY, lng);
  }

}
