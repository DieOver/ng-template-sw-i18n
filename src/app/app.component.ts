import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { LanguageService } from './shared/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'contabil';

  constructor(
    private languageService: LanguageService,
    private updates: SwUpdate,
    private router: Router
  ) {
    this.languageService.setInitialAppLanguage();

    this.updates.available.subscribe(async () => {
      await this.updates.activateUpdate();
      await this.router.navigateByUrl('');
      document.location.reload(true);
    });
  }
}
