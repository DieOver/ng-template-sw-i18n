import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  });

  constructor(
    private fb: FormBuilder,
    public languageService: LanguageService
  ) { }

  ngOnInit(): void {}

  changeLanguage(lng: string): void {
    this.languageService.setLanguage(lng);
  }

  onSubmit() {
    console.log('loginForm', this.loginForm.value);
  }

}
