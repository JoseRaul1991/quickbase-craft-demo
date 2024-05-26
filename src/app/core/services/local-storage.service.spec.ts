import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';
import { PLATFORM_ID } from '@angular/core';
import { TOKEN_PREFIX } from '../constants';

describe('LocalStorageService', () => {
  let service: LocalStorageService;
  let platformId: string;

  const key = 'testKey';
  const value = { data: 'testValue' };

  const TOKEN = `${TOKEN_PREFIX}_${key}`;

  beforeEach(() => {
    platformId = 'browser';
    TestBed.configureTestingModule({
      providers: [
        LocalStorageService,
        { provide: PLATFORM_ID, useValue: platformId },
      ],
    });
    service = TestBed.inject(LocalStorageService);

    // Clear localStorage before each test
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('[setItem]', () => {
    it('should set an item in localStorage when platform is browser', () => {
      // WHEN
      service.setItem(key, value);

      // THEN
      const storedValue = localStorage.getItem(TOKEN);
      expect(storedValue).toBe(JSON.stringify(value));
    });

    it('should not set an item in localStorage when platform is server', () => {
      // GIVEN
      platformId = 'server';
      service = new LocalStorageService(platformId);

      // WHEN
      service.setItem(key, value);

      // THEN
      const storedValue = localStorage.getItem(TOKEN);
      expect(storedValue).toBeNull();
    });
  });

  describe('[getItem]', () => {
    it('should return the correct item from localStorage when platform is browser', () => {
      // GIVEN
      localStorage.setItem(TOKEN, JSON.stringify(value));

      // WHEN
      const result = service.getItem(key);

      // THEN
      expect(result).toEqual(value);
    });

    it('should return null when item does not exist in localStorage', () => {
      // GIVEN
      const key = 'nonExistentKey';

      // WHEN
      const result = service.getItem(key);

      // THEN
      expect(result).toBeNull();
    });

    it('should return undefined when platform is server', () => {
      // GIVEN
      platformId = 'server';
      service = new LocalStorageService(platformId);

      // WHEN
      const result = service.getItem(key);

      // THEN
      expect(result).toBeUndefined();
    });
  });

  describe('[removeItem]', () => {
    it('should remove an item from localStorage when platform is browser', () => {
      // GIVEN
      const stringvalue = JSON.stringify(value);
      localStorage.setItem(TOKEN, stringvalue);
      const storedValue = localStorage.getItem(TOKEN);
      expect(storedValue).toBe(stringvalue);

      // WHEN
      service.removeItem(key);

      // THEN
      const storedValueRemoved = localStorage.getItem(TOKEN);
      expect(storedValueRemoved).toBeNull();
    });

    it('should not throw an error when removing a non-existent item', () => {
      // GIVEN
      const key = 'nonExistentKey';

      // WHEN / THEN
      expect(() => service.removeItem(key)).not.toThrow();
    });

    it('should not remove an item from localStorage when platform is server', () => {
      // GIVEN
      platformId = 'server';
      service = new LocalStorageService(platformId);
      localStorage.setItem(TOKEN, JSON.stringify(value));

      // WHEN
      service.removeItem(key);

      // THEN
      const storedValue = localStorage.getItem(TOKEN);
      expect(storedValue).toBe(JSON.stringify(value));
    });
  });
});
