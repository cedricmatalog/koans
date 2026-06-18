import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

describe('about error handling', () => {
  test('catch a validation error', () => {
    function validateEmail(email) {
      if (!email.includes('@')) throw new Error('invalid email');
      return email;
    }
    let message;
    try {
      validateEmail('not-an-email');
    } catch (err) {
      message = err.message;
    }
    expect(message).toBe(__);
    expect(validateEmail('ada@example.com')).toBe(__);
  });

  test('errors carry a name and a message', () => {
    const err = new TypeError('expected a string');
    expect(err.name).toBe(__);
    expect(err instanceof Error).toBe(__);
  });

  test('finally always runs (e.g. closing a connection)', () => {
    const log = [];
    try {
      log.push('query');
      throw new Error('db down');
    } catch {
      log.push('rollback');
    } finally {
      log.push('close');
    }
    expect(log).toEqual(__);
  });

  test('a custom domain error keeps extra context', () => {
    class PaymentError extends Error {
      constructor(message, code) {
        super(message);
        this.name = 'PaymentError';
        this.code = code;
      }
    }
    let err;
    try {
      throw new PaymentError('card declined', 'DECLINED');
    } catch (e) {
      err = e;
    }
    expect(err.name).toBe(__);
    expect(err.code).toBe(__);
    expect(err instanceof Error).toBe(__);
  });
});
