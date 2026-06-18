import { describe, expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

// Destructuring unpacks objects and arrays in one step. These koans pull fields
// from an API response, rename them, default them, nest them, and unpack params.

describe('about destructuring', () => {
  const response = {
    status: 200,
    data: {
      user: { id: 1, name: 'Ada', email: 'ada@example.com' },
      roles: ['admin', 'editor', 'viewer'],
    },
  };

  test('pull fields out of a user object', () => {
    const { name, email } = response.data.user;
    expect(name).toBe(__);
    expect(email).toBe(__);
  });

  test('rename a field while destructuring', () => {
    const { status: httpStatus } = response;
    expect(httpStatus).toBe(__);
  });

  test('provide a default for a missing field', () => {
    const { theme = 'light' } = {};
    expect(theme).toBe(__);
  });

  test('reach into nested data', () => {
    const {
      data: {
        user: { id },
      },
    } = response;
    expect(id).toBe(__);
  });

  test('split a result list into the first and the rest', () => {
    const [primaryRole, ...otherRoles] = response.data.roles;
    expect(primaryRole).toBe(__);
    expect(otherRoles).toEqual(__);
  });

  test('destructure right in the function parameters', () => {
    function greet({ name }) {
      return `Hello ${name}`;
    }
    expect(greet({ name: 'Ada', id: 1 })).toBe(__);
  });
});
