import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(
    private translateService: TranslateService
  ) { }

  setInitialAppLanguage(): void {
    const val = localStorage.getItem(environment.language.LNG_KEY);
    this.setLanguage(val ?? this.translateService.getBrowserLang());
  }

  setLanguage(lng: string): void {
    this.translateService.use(lng);
    localStorage.setItem(environment.language.LNG_KEY, lng);
  }

}
