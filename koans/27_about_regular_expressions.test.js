import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

describe('about regular expressions', () => {
  test('check whether an email looks valid', () => {
    const looksLikeEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    expect(looksLikeEmail.test('ada@example.com')).toBe(__);
    expect(looksLikeEmail.test('not-an-email')).toBe(__);
  });

  test('validate a 5-digit zip code', () => {
    expect(/^\d{5}$/.test('90210')).toBe(__);
    expect(/^\d{5}$/.test('9021')).toBe(__);
  });

  test('extract parts of a date string with capture groups', () => {
    const m = '2024-06-18'.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    expect(m[1]).toBe(__); // year
    expect(m[3]).toBe(__); // day
  });

  test('find all hashtags in a post', () => {
    expect('love #js and #web'.match(/#\w+/g)).toEqual(__);
  });

  test('mask the digits of a phone number', () => {
    expect('555-123-4567'.replace(/\d/g, '*')).toBe(__);
  });

  test('split a messy comma-separated tag list', () => {
    expect('JS, Web ,Node'.split(/\s*,\s*/)).toEqual(__);
  });
});
