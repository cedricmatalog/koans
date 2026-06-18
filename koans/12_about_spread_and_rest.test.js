import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

describe('about spread and rest', () => {
  test('merge default settings with user overrides', () => {
    const defaults = { theme: 'light', fontSize: 14, notifications: true };
    const overrides = { theme: 'dark' };
    expect({ ...defaults, ...overrides }).toEqual(__);
  });

  test('add an item without mutating the original cart', () => {
    const cart = ['Mouse', 'Keyboard'];
    const newCart = [...cart, 'Monitor'];
    expect(cart).toEqual(__);
    expect(newCart).toEqual(__);
  });

  test('combine two lists of tags', () => {
    expect([...['sale'], ...['new', 'popular']]).toEqual(__);
  });

  test('find the highest price in a list', () => {
    const prices = [1999, 4999, 999];
    expect(Math.max(...prices)).toBe(__);
  });

  test('collect the remaining arguments as line items', () => {
    function order(customer, ...items) {
      return { customer, items };
    }
    expect(order('Ada', 'Mouse', 'Cable')).toEqual(__);
  });

  test('copy a user and flip one field', () => {
    const user = { id: 1, name: 'Ada', active: false };
    expect({ ...user, active: true }).toEqual(__);
  });
});
