import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

describe('about this binding', () => {
  const cart = {
    items: ['Mouse', 'Keyboard'],
    count() {
      return this?.items?.length;
    },
  };

  test('a method uses `this` to reach its own object', () => {
    expect(cart.count()).toBe(__);
  });

  test('a method pulled off its object loses `this`', () => {
    const detached = cart.count;
    expect(detached()).toBe(__); // no object, so this is undefined
  });

  test('bind locks `this` to a chosen object', () => {
    function greet() {
      return `Hi ${this.name}`;
    }
    const greetAda = greet.bind({ name: 'Ada' });
    expect(greetAda()).toBe(__);
  });

  test('call borrows a function for another object', () => {
    function describe() {
      return `${this.name} (${this.role})`;
    }
    expect(describe.call({ name: 'Ada', role: 'admin' })).toBe(__);
  });

  test('apply passes its arguments as an array', () => {
    const prices = [1999, 4999, 999];
    expect(Math.max.apply(null, prices)).toBe(__);
  });

  test('partially apply a tax function with bind', () => {
    function addTax(rate, price) {
      return price + price * rate;
    }
    const withVat = addTax.bind(null, 0.2);
    expect(withVat(100)).toBe(__);
  });
});
