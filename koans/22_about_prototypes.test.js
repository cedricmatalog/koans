import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

// Objects delegate to a prototype for properties they don't have themselves.
// These koans walk the chain from delegation to where it ends at null.

describe('about prototypes', () => {
  test('objects delegate to a shared prototype', () => {
    const base = {
      greet() {
        return `Hi, I am ${this.name}`;
      },
    };
    const user = Object.create(base);
    user.name = 'Ada';
    // greet is not on user, but is found on its prototype
    expect(user.greet()).toBe(__);
  });

  test('own fields vs inherited defaults', () => {
    const defaults = { plan: 'free' };
    const account = Object.create(defaults);
    account.id = 1;
    expect(account.hasOwnProperty('id')).toBe(__);
    expect(account.hasOwnProperty('plan')).toBe(__);
    expect('plan' in account).toBe(__); // `in` searches the whole chain
    expect(account.plan).toBe(__);
  });

  test('constructor functions share methods via .prototype', () => {
    function Product(name) {
      this.name = name;
    }
    Product.prototype.label = function () {
      return `Product: ${this.name}`;
    };
    const p = new Product('Mouse');
    expect(p.label()).toBe(__);
    expect(p instanceof Product).toBe(__);
  });

  test('the prototype chain ends at null', () => {
    expect(Object.getPrototypeOf(Object.prototype)).toBe(__);
  });
});
