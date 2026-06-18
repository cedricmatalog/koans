import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

// Tip: real money math is done in integer cents to avoid floating-point errors.

describe('about numbers', () => {
  test('subtotal three items priced in cents', () => {
    expect(1999 + 2499 + 999).toBe(__);
  });

  test('apply a 20% off coupon', () => {
    const priceCents = 5000;
    expect(priceCents * 0.8).toBe(__);
  });

  test('a quantity must be a whole number', () => {
    expect(Number.isInteger(3)).toBe(__);
    expect(Number.isInteger(2.5)).toBe(__);
  });

  test('how many full boxes of 12, and how many left over?', () => {
    const eggs = 30;
    expect(Math.floor(eggs / 12)).toBe(__);
    expect(eggs % 12).toBe(__);
  });

  test('cap a product rating at 5 stars', () => {
    expect(Math.min(7, 5)).toBe(__);
  });

  test('parse a price typed by a user', () => {
    expect(parseFloat('$19.99'.slice(1))).toBe(__);
    expect(Number('1200')).toBe(__);
  });

  test('this is exactly why we avoid floats for money', () => {
    expect(0.1 + 0.2 === 0.3).toBe(__); // false: 0.1 + 0.2 is 0.30000000000000004
  });
});
