import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

describe('about scope and closures', () => {
  test('block scope keeps a variable local', () => {
    let message = 'outer';
    {
      let message = 'inner';
      expect(message).toBe(__);
    }
    expect(message).toBe(__);
  });

  test('let gives each loop iteration its own binding', () => {
    const handlers = [];
    for (let i = 0; i < 3; i++) {
      handlers.push(() => i);
    }
    expect(handlers.map((fn) => fn())).toEqual(__);
  });

  test('var is shared across iterations — the classic closure bug', () => {
    const handlers = [];
    for (var i = 0; i < 3; i++) {
      handlers.push(() => i);
    }
    // every handler closed over the SAME i, which ended at 3
    expect(handlers.map((fn) => fn())).toEqual(__);
  });

  test('a counter that remembers its count between calls', () => {
    function createCounter() {
      let count = 0;
      return () => ++count;
    }
    const next = createCounter();
    expect(next()).toBe(__);
    expect(next()).toBe(__);
  });

  test('each id generator keeps its own independent sequence', () => {
    function createIdGenerator(prefix) {
      let n = 0;
      return () => `${prefix}-${++n}`;
    }
    const userId = createIdGenerator('user');
    const orderId = createIdGenerator('order');
    expect(userId()).toBe(__);
    expect(userId()).toBe(__);
    expect(orderId()).toBe(__); // its own counter, not shared with userId
  });

  test('a balance only changeable through the methods that close over it', () => {
    function openAccount(initial) {
      let balance = initial;
      return {
        deposit: (amount) => (balance += amount),
        getBalance: () => balance,
      };
    }
    const account = openAccount(100);
    account.deposit(50);
    expect(account.getBalance()).toBe(__);
  });

  test('a memoized lookup only runs the expensive work once per key', () => {
    let calls = 0;
    function memoize(fn) {
      const cache = {};
      return (key) => (key in cache ? cache[key] : (cache[key] = fn(key)));
    }
    const lookup = memoize((id) => {
      calls += 1;
      return `user-${id}`;
    });
    lookup(5);
    lookup(5);
    expect(calls).toBe(__);
  });
});
