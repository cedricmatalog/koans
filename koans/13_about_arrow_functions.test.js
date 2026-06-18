import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

// Arrow functions are short and borrow `this` from their surroundings.
// These koans map prices, return object literals, and chain filter into map.

describe('about arrow functions', () => {
  const prices = [10, 20, 30];

  test('map prices, adding a flat shipping fee', () => {
    expect(prices.map((p) => p + 5)).toEqual(__);
  });

  test('a concise body returns implicitly', () => {
    const toLabel = (p) => `$${p}`;
    expect(toLabel(20)).toBe(__);
  });

  test('returning an object literal needs parentheses', () => {
    const toItem = (name) => ({ name, qty: 1 });
    expect(toItem('Mouse')).toEqual(__);
  });

  test('arrows keep `this` from the surrounding scope', () => {
    const cart = {
      items: ['Mouse', 'Keyboard'],
      shippingPerItem: 5,
      shippingCosts() {
        // the arrow inside map sees the cart's `this`
        return this.items.map(() => this.shippingPerItem);
      },
    };
    expect(cart.shippingCosts()).toEqual(__);
  });

  test('filter and map read top to bottom', () => {
    const inStock = [
      { name: 'Mouse', stock: 3 },
      { name: 'Cable', stock: 0 },
      { name: 'Monitor', stock: 1 },
    ];
    const available = inStock.filter((p) => p.stock > 0).map((p) => p.name);
    expect(available).toEqual(__);
  });
});
