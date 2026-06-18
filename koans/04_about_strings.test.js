import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

// Strings show up everywhere in a store: names, emails, slugs, card numbers.
// These koans measure, slice, split, and reshape them.

describe('about strings', () => {
  test('an email has a length', () => {
    expect('ada@example.com'.length).toBe(__);
  });

  test('build a full name from parts', () => {
    const first = 'Ada';
    const last = 'Lovelace';
    expect(first + ' ' + last).toBe(__);
  });

  test('normalize a username to lowercase', () => {
    expect('AdaLovelace'.toLowerCase()).toBe(__);
  });

  test('trim stray whitespace from user input', () => {
    expect('  ada@example.com  '.trim()).toBe(__);
  });

  test('extract the domain from an email', () => {
    const email = 'ada@example.com';
    expect(email.slice(email.indexOf('@') + 1)).toBe(__);
  });

  test('check an uploaded file type', () => {
    expect('invoice.pdf'.endsWith('.pdf')).toBe(__);
    expect('invoice.pdf'.includes('voice')).toBe(__);
  });

  test('parse a CSV row into fields', () => {
    expect('Ada,Lovelace,1815'.split(',')).toEqual(__);
  });

  test('show only the last 4 digits of a card', () => {
    expect('4111111111111234'.slice(-4)).toBe(__);
  });

  test('zero-pad an order number to five digits', () => {
    expect('42'.padStart(5, '0')).toBe(__);
  });

  test('length counts code units, not visible characters', () => {
    expect('😀'.length).toBe(__); // 😀 is stored as a surrogate pair of code units
    expect([...'😀'].length).toBe(__); // spreading iterates by code point
  });

  test('turn a title into a URL slug', () => {
    expect('Hello World Post'.toLowerCase().replaceAll(' ', '-')).toBe(__);
  });
});
