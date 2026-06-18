import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

// A Proxy wraps an object and intercepts operations (get, set, ...) via "traps".
// Reflect performs the default behavior. Useful for config defaults, validation,
// and reactive/observed state.

describe('about proxy', () => {
  test('return a fallback for missing config keys', () => {
    const config = new Proxy(
      { timeout: 30 },
      {
        get(target, key) {
          return key in target ? target[key] : 'default';
        },
      },
    );
    expect(config.timeout).toBe(__);
    expect(config.retries).toBe(__);
  });

  test('validate a value on assignment', () => {
    const user = new Proxy(
      {},
      {
        set(target, key, value) {
          if (key === 'age' && value < 0) throw new RangeError('age must be >= 0');
          target[key] = value;
          return true;
        },
      },
    );
    user.age = 30;
    expect(user.age).toBe(__);

    let rejected = false;
    try {
      user.age = -5;
    } catch {
      rejected = true;
    }
    expect(rejected).toBe(__);
  });

  test('log every property read with Reflect', () => {
    const reads = [];
    const tracked = new Proxy(
      { name: 'Ada' },
      {
        get(target, key, receiver) {
          reads.push(key);
          return Reflect.get(target, key, receiver);
        },
      },
    );
    tracked.name;
    tracked.name;
    expect(reads).toEqual(__);
  });
});
