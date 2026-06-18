import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

// Higher-order functions take or return other functions. These koans cover
// map, filter, reduce, some/every, and functions that build other functions.

describe('about higher-order functions', () => {
  const cart = [
    { name: 'Mouse', price: 2000, qty: 2 },
    { name: 'Keyboard', price: 5000, qty: 1 },
    { name: 'Cable', price: 500, qty: 3 },
  ];

  test('map a cart to a list of product names', () => {
    expect(cart.map((item) => item.name)).toEqual(__);
  });

  test('filter to the items priced at $20 or more', () => {
    expect(cart.filter((item) => item.price >= 2000).map((item) => item.name)).toEqual(__);
  });

  test('reduce a cart to its grand total (price times quantity)', () => {
    expect(cart.reduce((sum, item) => sum + item.price * item.qty, 0)).toBe(__);
  });

  test('reduce a list of events into counts', () => {
    const events = ['click', 'view', 'click', 'click', 'view'];
    const counts = events.reduce((acc, type) => {
      acc[type] = (acc[type] ?? 0) + 1;
      return acc;
    }, {});
    expect(counts).toEqual(__);
  });

  test('ask questions of the whole cart', () => {
    expect(cart.some((item) => item.price > 4000)).toBe(__);
    expect(cart.every((item) => item.price > 0)).toBe(__);
  });

  test('a reusable discount transformer (a function that returns a function)', () => {
    const discountBy = (percent) => (price) => price - (price * percent) / 100;
    const tenPercentOff = discountBy(10);
    expect(tenPercentOff(2000)).toBe(__);
  });

  test('transform an object by mapping over its entries and rebuilding it', () => {
    const prices = { mouse: 2000, keyboard: 5000 };
    const doubled = Object.fromEntries(
      Object.entries(prices).map(([name, cents]) => [name, cents * 2]),
    );
    expect(doubled).toEqual(__);
  });
});
