import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

// Named imports use the same names as the exports (in braces).
// The default import can be named anything (no braces).
// See ./17_money.module.js for what is being exported.
import receipt, { CURRENCY, formatPrice, applyDiscount as discount } from './17_money.module.js';

// Modules share code through exports. These koans cover named vs. default
// imports, aliasing with `as`, and dynamic import().

describe('about modules', () => {
  test('named exports keep their names', () => {
    expect(CURRENCY).toBe(__);
    expect(formatPrice(1999)).toBe(__);
  });

  test('a named import can be aliased with "as"', () => {
    expect(discount(1000, 20)).toBe(__); // 20% off 1000 cents
  });

  test('the default export is imported without braces', () => {
    expect(receipt([{ name: 'Mouse', cents: 1999 }])).toBe(__);
  });

  test('a dynamic import gathers everything onto one object', async () => {
    const mod = await import('./17_money.module.js');
    expect(mod.CURRENCY).toBe(__);
    expect(typeof mod.default).toBe(__); // the default export lives under .default
  });
});
