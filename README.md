# JavaScript Koans

> The journey of a thousand miles begins with a single failing test.

A set of small, failing tests that teach JavaScript one idea at a time — inspired
by [Ruby Koans](https://www.rubykoans.com/). You walk the path by making each test
pass, in order. The error messages are your teacher.

The examples are grounded in a small online store — users, products, carts,
orders, prices, API responses, caching, validation — so each concept shows up in
a situation you'd actually meet in real code.

## Setup

```bash
npm install
```

## Walking the path

Run the koans in watch mode and they will re-run every time you save:

```bash
npm run meditate
```

Or run once and stop at the first thing to fix:

```bash
npm run walk
```

The runner **stops at the first failing koan**. Open the file it names, fix that
one assertion, save, and it advances to the next. Repeat until you reach
enlightenment.

## The `__` rule

Each koan has a blank named `__` (imported from `koans/helpers/koan.js`). It is a
placeholder that equals nothing. Your job is to replace `__` with the value or
expression that makes the assertion true:

```js
import { expect, test } from 'vitest';
import { __ } from './helpers/koan.js';

test('two plus two', () => {
  expect(2 + 2).toBe(__); // replace __ with 4
});
```

Run it and you'll see:

```
expected 4 to be Symbol(fill me in)
```

That is the answer you seek. Change `__` to `4` and move on.

Some koans don't use `__` — they have a deliberately wrong expectation, or an
empty function body for you to implement. The failing message always tells you
what's expected.

## The path

The koans build on each other, from fundamentals to async:

1. **Fundamentals** — asserts, types, equality, strings, numbers, arrays,
   objects, functions, scope & closures
2. **Modern ES** — template literals, destructuring, spread/rest, arrow
   functions, symbols, classes, optional chaining, modules
3. **Collections & iteration** — Map/Set, iterators & iterables
4. **Functional & advanced** — higher-order functions, `this`, prototypes,
   generators, Proxy
5. **Errors & data** — error handling, JSON, regular expressions, dates
6. **Async** — callbacks, promises (incl. `allSettled`/`any`), async/await, the
   event loop

## A note on answers

The answers are intentionally left out. Struggling a little is the point. When you
are truly stuck, the failing assertion, [MDN](https://developer.mozilla.org/), and
a Node REPL are fair game.

> Mountains are merely mountains.
