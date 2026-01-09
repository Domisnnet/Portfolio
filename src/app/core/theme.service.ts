import { Injectable, signal, effect, PLATFORM_ID, inject, Renderer2, RendererFactory2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private rendererFactory = inject(RendererFactory2);
  private renderer: Renderer2;
  private isBrowser = isPlatformBrowser(this.platformId);

  theme = signal<Theme>('dark'); // Start with a safe default

  constructor() {
    this.renderer = this.rendererFactory.createRenderer(null, null);

    if (this.isBrowser) {
      const initialTheme = this.getInitialTheme();
      this.theme.set(initialTheme);
    }

    // Effect to react to theme changes
    effect(() => {
      if (this.isBrowser) {
        const currentTheme = this.theme();
        // The CSS is designed with dark as the default (no class) and light as the override class.
        if (currentTheme === 'light') {
          this.renderer.addClass(document.documentElement, 'light');
        } else {
          this.renderer.removeClass(document.documentElement, 'light');
        }
        localStorage.setItem('theme', currentTheme);
      }
    });
  }

  toggleTheme() {
    this.theme.update((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  }

  private getInitialTheme(): Theme {
    if (!this.isBrowser) {
      return 'dark';
    }
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme) {
      return storedTheme;
    }
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  }
}