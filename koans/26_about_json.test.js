import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

describe('about JSON', () => {
  test('serialize a request body', () => {
    expect(JSON.stringify({ name: 'Ada', age: 30 })).toBe(__);
  });

  test('parse an API response', () => {
    const res = JSON.parse('{"id":1,"active":true,"tags":["a","b"]}');
    expect(res.id).toBe(__);
    expect(res.active).toBe(__);
    expect(res.tags).toEqual(__);
  });

  test('deep-clone a config with a JSON round trip', () => {
    const original = { ui: { theme: 'dark' } };
    const copy = JSON.parse(JSON.stringify(original));
    expect(copy).toEqual(__);
    expect(copy === original).toBe(__);
    expect(copy.ui === original.ui).toBe(__); // even nested objects are new
  });

  test('undefined values and functions are dropped', () => {
    expect(JSON.stringify({ a: 1, b: undefined, c: () => {} })).toBe(__);
  });

  test('pretty-print for a log file', () => {
    expect(JSON.stringify({ ok: true }, null, 2)).toBe(__);
  });
});
