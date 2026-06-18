import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

// Generators produce values lazily, one yield at a time. These koans make id
// sequences, finite ranges, infinite streams, and delegate with yield*.

describe('about generators', () => {
  test('generate sequential order ids on demand', () => {
    function* orderIds() {
      let n = 100;
      while (true) {
        yield `ORD-${n++}`;
      }
    }
    const ids = orderIds();
    expect(ids.next().value).toBe(__);
    expect(ids.next().value).toBe(__);
  });

  test('yield a fixed sequence of statuses', () => {
    function* statuses() {
      yield 'pending';
      yield 'shipped';
      yield 'delivered';
    }
    expect([...statuses()]).toEqual(__);
  });

  test('a lazy range of page numbers', () => {
    function* range(start, end) {
      for (let i = start; i <= end; i++) {
        yield i;
      }
    }
    expect([...range(1, 5)]).toEqual(__);
  });

  test('take only what you need from an infinite stream', () => {
    function* naturals() {
      let n = 1;
      while (true) {
        yield n++;
      }
    }
    const stream = naturals();
    expect([stream.next().value, stream.next().value, stream.next().value]).toEqual(__);
  });

  test('yield* delegates to another generator', () => {
    function* middle() {
      yield 1;
      yield 2;
    }
    function* all() {
      yield 0;
      yield* middle();
      yield 3;
    }
    expect([...all()]).toEqual(__);
  });
});
