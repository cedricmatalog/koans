import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

describe('about promises', () => {
  const fetchUser = (id) => Promise.resolve({ id, name: 'Ada' });
  const fetchOrders = () => Promise.resolve(['ORD-1', 'ORD-2']);

  test('await a resolved value', async () => {
    const user = await fetchUser(1);
    expect(user.name).toBe(__);
  });

  test('chain transformations with then', async () => {
    const name = await fetchUser(1)
      .then((u) => u.name)
      .then((n) => n.toUpperCase());
    expect(name).toBe(__);
  });

  test('handle a rejected request with catch', async () => {
    const failing = Promise.reject(new Error('network error'));
    const message = await failing.catch((e) => e.message);
    expect(message).toBe(__);
  });

  test('fetch user and orders in parallel with all', async () => {
    const [user, orders] = await Promise.all([fetchUser(1), fetchOrders(1)]);
    expect(user.name).toBe(__);
    expect(orders).toEqual(__);
  });

  test('all rejects if any request fails', async () => {
    const result = await Promise.all([Promise.resolve('ok'), Promise.reject('timeout')]).catch(
      (e) => e,
    );
    expect(result).toBe(__);
  });

  test('race settles with whichever responds first', async () => {
    const fromCache = new Promise((resolve) => setTimeout(() => resolve('cache'), 0));
    const fromDb = new Promise((resolve) => setTimeout(() => resolve('database'), 50));
    expect(await Promise.race([fromCache, fromDb])).toBe(__);
  });

  test('allSettled reports every outcome instead of failing fast', async () => {
    const results = await Promise.allSettled([
      Promise.resolve('ok'),
      Promise.reject(new Error('boom')),
    ]);
    expect(results[0]).toEqual(__); // a { status, value } record
    expect(results[1].status).toBe(__);
    expect(results[1].reason.message).toBe(__);
  });

  test('any resolves with the first success, ignoring earlier failures', async () => {
    const winner = await Promise.any([
      Promise.reject(new Error('cache miss')),
      Promise.resolve('from database'),
    ]);
    expect(winner).toBe(__);
  });
});
