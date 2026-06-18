import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

// Equality bugs are everywhere in real apps: query params arrive as strings,
// form fields come in empty, feature flags get coerced to booleans.

describe('about equality', () => {
  test('an id from the URL arrives as text, not a number', () => {
    const idFromUrl = '42';
    expect(idFromUrl === 42).toBe(__);
    expect(idFromUrl == 42).toBe(__); // == coerces first
    expect(Number(idFromUrl) === 42).toBe(__);
  });

  test('these inputs all count as "not provided"', () => {
    expect(!!0).toBe(__);
    expect(!!'').toBe(__);
    expect(!!null).toBe(__);
    expect(!!undefined).toBe(__);
  });

  test('a provided value is truthy even when it looks empty-ish', () => {
    expect(!!'0').toBe(__); // the string "0"
    expect(!![]).toBe(__); // an empty cart array
  });

  test('default a display name with OR', () => {
    const nickname = '';
    expect(nickname || 'Anonymous').toBe(__);
  });

  test('guard before reading a property with AND', () => {
    const user = null;
    expect(user && user.name).toBe(__);
  });

  test('OR returns the first truthy operand', () => {
    const configuredPageSize = undefined;
    expect(configuredPageSize || 20).toBe(__);
  });

  test('=== gets two cases "wrong"; Object.is fixes them', () => {
    expect(NaN === NaN).toBe(__); // does NaN equal anything, even itself?
    expect(Object.is(NaN, NaN)).toBe(__);
    expect(-0 === 0).toBe(__);
    expect(Object.is(-0, 0)).toBe(__); // does Object.is treat -0 and 0 as the same value?
  });
});
