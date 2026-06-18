import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

describe('about Map', () => {
  test('a cache of users looked up by id', () => {
    const cache = new Map();
    cache.set(1, 'Ada');
    cache.set(2, 'Grace');
    expect(cache.get(1)).toBe(__);
    expect(cache.size).toBe(__);
  });

  test('any value can be a key, including objects', () => {
    const views = new Map();
    const product = { id: 1 };
    views.set(product, 5);
    expect(views.get(product)).toBe(__);
    expect(views.get({ id: 1 })).toBe(__); // a different object, even if it looks the same
  });

  test('check and evict a cached entry', () => {
    const cache = new Map([['token', 'abc123']]);
    expect(cache.has('token')).toBe(__);
    cache.delete('token');
    expect(cache.has('token')).toBe(__);
  });
});

describe('about Set', () => {
  test('collect the unique tags on a post', () => {
    const tags = new Set(['js', 'web', 'js', 'node', 'web']);
    expect(tags.size).toBe(__);
  });

  test('test membership in a permission set', () => {
    const permissions = new Set(['read', 'write']);
    expect(permissions.has('read')).toBe(__);
    expect(permissions.has('delete')).toBe(__);
  });

  test('dedupe a list of visitor ids', () => {
    expect([...new Set([1, 1, 2, 3, 3, 3])]).toEqual(__);
  });
});
