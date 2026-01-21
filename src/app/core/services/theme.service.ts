import { Injectable } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly storageKey = 'app-theme';
  private currentTheme: Theme = 'dark';

  constructor() {
    this.loadTheme();
  }

  private loadTheme(): void {
    const savedTheme = localStorage.getItem(this.storageKey) as Theme | null;

    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      this.setTheme('dark');
    }
  }

  setTheme(theme: Theme): void {
    this.currentTheme = theme;

    const body = document.body;
    body.classList.remove('light-theme');

    if (theme === 'light') {
      body.classList.add('light-theme');
    }

    localStorage.setItem(this.storageKey, theme);
  }

  toggleTheme(): void {
    const nextTheme: Theme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(nextTheme);
  }

  getTheme(): Theme {
    return this.currentTheme;
  }
}