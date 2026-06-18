import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

// Welcome, traveler. These koans use a small online store as their world:
// users, products, carts, and orders. Replace every `__` so the assertion
// passes, then save the file and watch the path reveal itself.

describe('about asserts', () => {
  test('an order is either paid or it is not', () => {
    const orderIsPaid = true;
    expect(orderIsPaid).toBe(__);
  });

  test('a brand new cart is empty', () => {
    const itemCount = 0;
    expect(itemCount === 0).toBe(__);
  });

  test('the subtotal of two items, in cents', () => {
    const mouse = 1999;
    const cable = 500;
    expect(mouse + cable).toBe(__);
  });

  test('a product has a name', () => {
    const productName = 'Wireless Mouse';
    expect(productName).toBe(__);
  });

  test('the order confirmation message', () => {
    const customer = 'Ada';
    expect(`Thank you for your order, ${customer}!`).toBe(__);
  });
});
