// A small utility module imported by 17_about_modules.test.js.
// It demonstrates named exports and a default export.

export const CURRENCY = 'USD';

// Format an amount of cents as a dollar string.
export function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2)}`;
}

// Subtract a whole-number percentage discount from an amount of cents.
export function applyDiscount(cents, percent) {
  return cents - Math.round((cents * percent) / 100);
}

// The default export — there can be only one per module.
export default function receipt(items) {
  return items.map((item) => `${item.name}: ${formatPrice(item.cents)}`).join('\n');
}
