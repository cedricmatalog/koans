import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

describe('about symbols', () => {
  test('two generated session ids are never equal', () => {
    const a = Symbol('session');
    const b = Symbol('session');
    expect(a === b).toBe(__);
  });

  test('symbols have their own type', () => {
    expect(typeof Symbol()).toBe(__);
  });

  test('use a symbol as a hidden metadata key', () => {
    const INTERNAL = Symbol('internal');
    const record = { name: 'Ada', [INTERNAL]: { cached: true } };
    expect(record[INTERNAL]).toEqual(__);
    expect(Object.keys(record)).toEqual(__); // symbol keys are not listed
  });

  test('the global registry shares a symbol by name', () => {
    expect(Symbol.for('app.id') === Symbol.for('app.id')).toBe(__);
  });

  test('Symbol.iterator makes a collection iterable', () => {
    const playlist = {
      tracks: ['intro', 'verse', 'chorus'],
      [Symbol.iterator]() {
        return this.tracks[Symbol.iterator]();
      },
    };
    expect([...playlist]).toEqual(__);
  });
});
