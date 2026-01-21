import { Injectable, signal, effect, PLATFORM_ID, inject, Renderer2, RendererFactory2, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly storageKey = 'theme';

  private platformId = inject(PLATFORM_ID);
  private rendererFactory = inject(RendererFactory2);
  private renderer: Renderer2;
  private isBrowser = isPlatformBrowser(this.platformId);

  readonly theme = signal<Theme>('dark');

  constructor() {
    this.renderer = this.rendererFactory.createRenderer(null, null);

    if (this.isBrowser) {
      this.theme.set(this.getInitialTheme());
    }

    effect(() => {
      if (!this.isBrowser) return;

      const currentTheme = this.theme();

      if (currentTheme === 'light') {
        this.renderer.addClass(document.documentElement, 'light-theme');
      } else {
        this.renderer.removeClass(document.documentElement, 'light-theme');
      }

      localStorage.setItem(this.storageKey, currentTheme);
    });
  }

  toggleTheme(): void {
    this.theme.update((t) => (t === 'light' ? 'dark' : 'light'));
  }

  isLight(): boolean {
    return this.theme() === 'light';
  }

  isDark(): boolean {
    return this.theme() === 'dark';
  }

  private getInitialTheme(): Theme {
    const storedTheme = localStorage.getItem(this.storageKey) as Theme | null;
    return storedTheme === 'light' || storedTheme === 'dark'
      ? storedTheme
      : 'dark';
  }
}