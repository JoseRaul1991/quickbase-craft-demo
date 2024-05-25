import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TOKEN_PREFIX } from '../constants/local-storage';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(@Inject(PLATFORM_ID) private platformId: string) {}

  setItem(key: string, value: any) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(`${TOKEN_PREFIX}_${key}`, JSON.stringify(value));
    }
  }

  getItem(key: string) {
    if (isPlatformBrowser(this.platformId)) {
      try {
        const item = localStorage.getItem(`${TOKEN_PREFIX}_${key}`);
        return item ? JSON.parse(item) : null;
      } catch (error) {
        console.log(error);
      }
    }
  }

  removeItem(key: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(`${TOKEN_PREFIX}_${key}`);
    }
  }
}
