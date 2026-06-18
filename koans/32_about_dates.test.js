import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

// Orders, users, and events all carry timestamps. Dates are full of sharp edges
// (zero-based months, time zones), so these koans work in UTC to stay predictable.

describe('about dates', () => {
  test('read the parts of a date created from an ISO string', () => {
    const placedAt = new Date('2024-06-18T00:00:00Z');
    expect(placedAt.getUTCFullYear()).toBe(__);
    expect(placedAt.getUTCMonth()).toBe(__); // beware: months are zero-based!
    expect(placedAt.getUTCDate()).toBe(__);
  });

  test('months count from zero', () => {
    const january = new Date(Date.UTC(2024, 0, 15));
    expect(january.getUTCMonth()).toBe(__);
  });

  test('a timestamp is milliseconds since the Unix epoch', () => {
    const epoch = new Date('1970-01-01T00:00:00Z');
    expect(epoch.getTime()).toBe(__);
  });

  test('compare two dates to see which came first', () => {
    const placed = new Date('2024-06-01T00:00:00Z');
    const shipped = new Date('2024-06-03T00:00:00Z');
    expect(placed < shipped).toBe(__);
  });

  test('how many days between order and delivery?', () => {
    const placed = new Date('2024-06-01T00:00:00Z');
    const delivered = new Date('2024-06-08T00:00:00Z');
    const msPerDay = 1000 * 60 * 60 * 24;
    // subtracting dates coerces them to millisecond numbers
    expect((delivered - placed) / msPerDay).toBe(__);
  });

  test('sort orders by date, newest first', () => {
    const dates = [
      new Date('2024-06-03T00:00:00Z'),
      new Date('2024-06-01T00:00:00Z'),
      new Date('2024-06-02T00:00:00Z'),
    ];
    const sorted = [...dates].sort((a, b) => b - a).map((d) => d.toISOString().slice(0, 10));
    expect(sorted).toEqual(__);
  });

  test('serialize a date to ISO for an API request', () => {
    const d = new Date('2024-06-18T12:30:00Z');
    expect(d.toISOString()).toBe(__);
  });
});
