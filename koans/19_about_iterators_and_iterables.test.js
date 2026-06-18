import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

// An "iterable" has a [Symbol.iterator] method returning an "iterator" — an
// object whose next() yields { value, done } records. for...of and spread both
// speak this protocol.

describe('about iterators and iterables', () => {
  test('iterate over a page of search results', () => {
    const collected = [];
    for (const hit of ['post-1', 'post-2', 'post-3']) {
      collected.push(hit);
    }
    expect(collected).toEqual(__);
  });

  test('a SKU string is iterable by character', () => {
    expect([...'ABC']).toEqual(__);
  });

  test('drive an iterator by hand', () => {
    const it = ['Ada', 'Grace'][Symbol.iterator]();
    expect(it.next()).toEqual(__);
    expect(it.next()).toEqual(__);
    expect(it.next()).toEqual(__); // past the end
  });

  test('build a custom paginator that yields page numbers', () => {
    const pages = {
      totalPages: 3,
      [Symbol.iterator]() {
        let page = 1;
        const total = this.totalPages;
        return {
          next: () =>
            page <= total ? { value: page++, done: false } : { value: undefined, done: true },
        };
      },
    };
    expect([...pages]).toEqual(__);
  });

  test('Map and Set are iterable too', () => {
    expect([...new Set(['a', 'b'])]).toEqual(__);
    expect([...new Map([['id', 1]])]).toEqual(__); // entries as [key, value]
  });
});
