import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

describe('about arrays', () => {
  const cart = ['Mouse', 'Keyboard', 'Monitor'];

  test('how many items are in the cart', () => {
    expect(cart.length).toBe(__);
  });

  test('the first item added', () => {
    expect(cart[0]).toBe(__);
  });

  test('add an item to the cart', () => {
    const items = ['Mouse'];
    items.push('Cable');
    expect(items).toEqual(__);
  });

  test('remove the most recently added item', () => {
    const items = ['Mouse', 'Cable'];
    const removed = items.pop();
    expect(removed).toBe(__);
    expect(items).toEqual(__);
  });

  test('is a product already in the cart?', () => {
    expect(cart.includes('Keyboard')).toBe(__);
    expect(cart.includes('Webcam')).toBe(__);
  });

  test('find the position of a product', () => {
    expect(cart.indexOf('Monitor')).toBe(__);
  });

  test('find the first product matching a condition', () => {
    expect(cart.find((item) => item.length > 6)).toBe(__);
    expect(cart.findIndex((item) => item.length > 6)).toBe(__);
  });

  test('take the first two items for a preview', () => {
    expect(cart.slice(0, 2)).toEqual(__);
  });

  test('remove one item by its index', () => {
    const items = ['Mouse', 'Keyboard', 'Monitor'];
    items.splice(1, 1);
    expect(items).toEqual(__);
  });

  test('show a wishlist sorted alphabetically', () => {
    expect(['Monitor', 'Cable', 'Mouse'].sort()).toEqual(__);
  });

  test('the classic trap: default sort compares numbers as strings', () => {
    expect([1, 2, 10].sort()).toEqual(__); // default sort converts each element to a string first
    expect([1, 2, 10].sort((a, b) => a - b)).toEqual(__); // a comparator fixes it
  });

  test('some methods mutate the original, some return a copy', () => {
    const prices = [3, 1, 2];
    const copy = prices.slice().sort((a, b) => a - b);
    expect(copy).toEqual(__);
    expect(prices).toEqual(__); // which array did sort() actually run on?
    prices.sort((a, b) => a - b);
    expect(prices).toEqual(__); // sort() reorders in place the array it's called on
  });

  test('reach the last item without computing length - 1', () => {
    expect(cart.at(-1)).toBe(__);
  });
});
