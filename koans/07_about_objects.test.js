import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

describe('about objects', () => {
  const user = {
    id: 7,
    name: 'Ada Lovelace',
    email: 'ada@example.com',
  };

  test('read a profile field two ways', () => {
    expect(user.name).toBe(__);
    expect(user['email']).toBe(__);
  });

  test('a field that does not exist is undefined', () => {
    expect(user.phone).toBe(__);
  });

  test('update a profile without mutating the original', () => {
    const updated = { ...user, verified: true };
    expect(updated.verified).toBe(__);
    expect(user.verified).toBe(__); // original is untouched
  });

  test('list the keys and values of a settings object', () => {
    const settings = { theme: 'dark', notifications: true };
    expect(Object.keys(settings)).toEqual(__);
    expect(Object.values(settings)).toEqual(__);
  });

  test('check whether a setting was provided', () => {
    const settings = { theme: 'dark' };
    expect('theme' in settings).toBe(__);
    expect('language' in settings).toBe(__);
  });

  test('entries pairs each key with its value', () => {
    expect(Object.entries({ a: 1, b: 2 })).toEqual(__);
  });

  test('fromEntries rebuilds an object from [key, value] pairs', () => {
    const pairs = [
      ['theme', 'dark'],
      ['fontSize', 14],
    ];
    expect(Object.fromEntries(pairs)).toEqual(__);
  });

  test('transform an object by round-tripping through entries', () => {
    const prices = { mouse: 2000, keyboard: 5000 };
    const doubled = Object.fromEntries(
      Object.entries(prices).map(([name, cents]) => [name, cents * 2]),
    );
    expect(doubled).toEqual(__);
  });

  test('two users with identical data are still different objects', () => {
    const a = { id: 1 };
    const b = { id: 1 };
    expect(a === b).toBe(__);
    expect(a).toEqual(b); // same structure
  });

  test('freeze a config so it cannot be tampered with', () => {
    const config = Object.freeze({ apiUrl: 'https://api.example.com' });
    try {
      config.apiUrl = 'http://evil.example.com';
    } catch {
      // strict mode throws; either way the value does not change
    }
    expect(config.apiUrl).toBe(__);
    expect(Object.isFrozen(config)).toBe(__);
  });
});
