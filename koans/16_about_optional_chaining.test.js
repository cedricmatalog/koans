import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

// API responses are full of optional, sometimes-missing nested fields.
// Optional chaining (?.) and nullish coalescing (??) handle them safely.

describe('about optional chaining and nullish coalescing', () => {
  const order = {
    id: 1,
    customer: { name: 'Ada', address: { city: 'London' } },
    payment: null,
  };

  test('reach a nested field that exists', () => {
    expect(order.customer?.address?.city).toBe(__);
  });

  test('a missing branch yields undefined instead of throwing', () => {
    expect(order.payment?.method).toBe(__);
    expect(order.shipping?.tracking?.number).toBe(__);
  });

  test('call a method only if it exists', () => {
    const logger = { info: (msg) => `LOG: ${msg}` };
    expect(logger.info?.('shipped')).toBe(__);
    expect(logger.debug?.('shipped')).toBe(__);
  });

  test('?? fills in only when the value is null or undefined', () => {
    const settings = { pageSize: 0, theme: null };
    expect(settings.pageSize ?? 20).toBe(__); // ?? only replaces null or undefined
    expect(settings.theme ?? 'light').toBe(__);
  });

  test('?? differs from || when the value is 0', () => {
    expect(0 || 20).toBe(__);
    expect(0 ?? 20).toBe(__);
  });

  test('??= assigns only when the current value is null or undefined', () => {
    const settings = { pageSize: 0 };
    settings.pageSize ??= 20; // ??= assigns only when the left side is null or undefined
    settings.theme ??= 'light'; // theme isn't set yet
    expect(settings.pageSize).toBe(__);
    expect(settings.theme).toBe(__);
  });
});
