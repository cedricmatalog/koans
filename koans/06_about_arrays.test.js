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
});
