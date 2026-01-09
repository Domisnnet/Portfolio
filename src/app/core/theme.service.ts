import { Injectable, signal, effect, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isBrowser: boolean;
  theme = signal<Theme>(this.getInitialTheme());

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    effect(() => {
      if (this.isBrowser) {
        localStorage.setItem('theme', this.theme());
        if (this.theme() === 'light') {
          document.body.classList.add('light');
        } else {
          document.body.classList.remove('light');
        }
      }
    });
  }

  toggleTheme() {
    this.theme.update((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  }

  private getInitialTheme(): Theme {
    if (this.isBrowser) {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'light' || storedTheme === 'dark') {
        return storedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    return 'dark'; // Default para SSR
  }
}
