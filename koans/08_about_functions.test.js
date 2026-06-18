import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

// Functions price orders and carry behavior. These koans cover default
// parameters, rest arguments, missing arguments, and passing functions as values.

describe('about functions', () => {
  function priceWithTax(price, rate = 0.1) {
    return price + price * rate;
  }

  test('calculate a price with the default tax rate', () => {
    expect(priceWithTax(100)).toBe(__);
  });

  test('override the default tax rate', () => {
    expect(priceWithTax(100, 0.2)).toBe(__);
  });

  test('a function expression for a discount', () => {
    const halfOff = (price) => price / 2;
    expect(halfOff(50)).toBe(__);
  });

  test('sum any number of line items', () => {
    function total(...amounts) {
      return amounts.reduce((sum, n) => sum + n, 0);
    }
    expect(total(10, 20, 30)).toBe(__);
    expect(total()).toBe(__);
  });

  test('a missing argument is undefined', () => {
    function fullName(first, last) {
      return [first, last];
    }
    expect(fullName('Ada')).toEqual(__);
  });

  test('functions can be passed in as behavior', () => {
    function retryOnce(fn) {
      return fn() ?? fn();
    }
    let attempts = 0;
    const flaky = () => (++attempts === 1 ? null : 'ok');
    expect(retryOnce(flaky)).toBe(__);
  });
});
