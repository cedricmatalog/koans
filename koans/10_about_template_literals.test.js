import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

describe('about template literals', () => {
  test('render a personalized greeting', () => {
    const name = 'Ada';
    expect(`Welcome back, ${name}!`).toBe(__);
  });

  test('build an API endpoint url', () => {
    const userId = 42;
    expect(`/api/users/${userId}/orders`).toBe(__);
  });

  test('format a cart line item', () => {
    const qty = 3;
    const priceCents = 1999;
    expect(`${qty} x $${(priceCents / 100).toFixed(2)}`).toBe(__);
  });

  test('a multiline email body', () => {
    const body = `Hi Ada,

Your order has shipped.`;
    expect(body.split('\n').length).toBe(__);
  });

  test('a tag function receives the interpolated values', () => {
    function collect(strings, ...values) {
      return values;
    }
    const product = 'Mouse';
    const qty = 2;
    expect(collect`Buy ${product} x${qty}`).toEqual(__);
  });
});
