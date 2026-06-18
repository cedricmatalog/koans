import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

describe('about async/await', () => {
  const db = {
    findUser: (id) => Promise.resolve({ id, name: 'Ada', orderIds: [1, 2] }),
    findOrder: (id) => Promise.resolve({ id, total: id * 1000 }),
  };

  test('await unwraps a promise', async () => {
    const user = await db.findUser(1);
    expect(user.name).toBe(__);
  });

  test('an async function always returns a promise', () => {
    async function load() {
      return 'data';
    }
    expect(load() instanceof Promise).toBe(__);
  });

  test('await two things in sequence, using the first to fetch the second', async () => {
    const user = await db.findUser(1);
    const firstOrder = await db.findOrder(user.orderIds[0]);
    expect(firstOrder.total).toBe(__);
  });

  test('try/catch handles a rejected await', async () => {
    async function failing() {
      throw new Error('timeout');
    }
    let message;
    try {
      await failing();
    } catch (err) {
      message = err.message;
    }
    expect(message).toBe(__);
  });

  test('load several orders in parallel', async () => {
    const totals = await Promise.all(
      [db.findOrder(1), db.findOrder(2)].map(async (p) => (await p).total),
    );
    expect(totals).toEqual(__);
  });
});
