import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

// The final koan. JavaScript runs synchronous code first, then drains the
// "microtask" queue (resolved promises), and only then runs "macrotasks"
// (setTimeout). Predict the order things are logged.

describe('about the event loop', () => {
  test('synchronous logs come before async ones', async () => {
    const logs = [];
    logs.push('start request');
    await Promise.resolve().then(() => logs.push('promise callback'));
    logs.push('after await');
    expect(logs).toEqual(__);
  });

  test('promises (microtasks) run before setTimeout (macrotasks)', async () => {
    const logs = [];
    await new Promise((resolve) => {
      setTimeout(() => {
        logs.push('timeout');
        resolve();
      }, 0);
      Promise.resolve().then(() => logs.push('promise'));
      logs.push('sync');
    });
    expect(logs).toEqual(__);
  });

  test('the whole call stack finishes before any timer fires', () => {
    const logs = [];
    function handleRequest() {
      logs.push('received');
      logs.push('responded');
    }
    handleRequest();
    expect(logs).toEqual(__);
  });

  test('you have walked the path', () => {
    // State the final truth to complete your journey.
    expect('JavaScript is merely JavaScript').toBe(__);
  });
});
