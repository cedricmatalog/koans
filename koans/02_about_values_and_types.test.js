import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

// A product fetched from an API has fields of different types.
// `typeof` reveals the type of a value (as a string).

describe('about values and types', () => {
  const product = {
    id: 101,
    name: 'Wireless Mouse',
    inStock: true,
    discount: null,
  };

  test('an id is a number', () => {
    expect(typeof product.id).toBe(__);
  });

  test('a name is a string', () => {
    expect(typeof product.name).toBe(__);
  });

  test('availability is a boolean', () => {
    expect(typeof product.inStock).toBe(__);
  });

  test('a field that was never set is undefined', () => {
    expect(typeof product.weight).toBe(__);
  });

  test('a deliberately empty field is null... but typeof lies about it', () => {
    expect(typeof product.discount).toBe(__);
  });

  test('the product itself is an object', () => {
    expect(typeof product).toBe(__);
  });

  test('an unparseable price becomes NaN, which is not even equal to itself', () => {
    const price = Number('not a price');
    expect(Number.isNaN(price)).toBe(__);
    expect(price === price).toBe(__);
  });

  test('"missing" and "explicitly empty" compare loosely but not strictly', () => {
    expect(product.discount == undefined).toBe(__);
    expect(product.discount === undefined).toBe(__);
  });
});
