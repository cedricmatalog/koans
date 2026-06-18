import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

describe('about callbacks', () => {
  test('a callback transforms each record', () => {
    function mapUsers(users, fn) {
      return users.map(fn);
    }
    expect(mapUsers([{ name: 'Ada' }, { name: 'Grace' }], (u) => u.name)).toEqual(__);
  });

  test('an async callback runs after the current code finishes', async () => {
    const order = [];
    await new Promise((resolve) => {
      order.push('request sent');
      setTimeout(() => {
        order.push('response received');
        resolve();
      }, 0);
      order.push('keep working');
    });
    expect(order).toEqual(__);
  });

  test('the node-style error-first callback convention', () => {
    function fetchUser(id, callback) {
      if (id <= 0) {
        callback(new Error('not found'), null);
      } else {
        callback(null, { id, name: 'Ada' });
      }
    }

    let result;
    fetchUser(1, (err, user) => {
      result = err ? 'error' : user.name;
    });
    expect(result).toBe(__);

    let failure;
    fetchUser(-1, (err, user) => {
      failure = err ? err.message : 'ok';
    });
    expect(failure).toBe(__);
  });
});
