import { defineConfig } from 'vitest/config';
import KoanReporter from './koans/helpers/reporter.js';
import KoanSequencer from './koans/helpers/sequencer.js';

// The path is walked in order. Each koan must be completed before the next is
// revealed: `bail: 1` stops the run at the first broken assertion, and disabling
// parallelism keeps the koans from racing ahead of you.
export default defineConfig({
  test: {
    // Explicit, ordered list so the koans run as a curriculum, not alphabetically
    // (alphabetical happens to match here, but we make the intent explicit).
    include: [
      'koans/01_about_asserts.test.js',
      'koans/02_about_values_and_types.test.js',
      'koans/03_about_equality.test.js',
      'koans/04_about_strings.test.js',
      'koans/05_about_numbers.test.js',
      'koans/06_about_arrays.test.js',
      'koans/07_about_objects.test.js',
      'koans/08_about_functions.test.js',
      'koans/09_about_scope_and_closures.test.js',
      'koans/10_about_template_literals.test.js',
      'koans/11_about_destructuring.test.js',
      'koans/12_about_spread_and_rest.test.js',
      'koans/13_about_arrow_functions.test.js',
      'koans/14_about_symbols.test.js',
      'koans/15_about_classes.test.js',
      'koans/16_about_optional_chaining.test.js',
      'koans/17_about_modules.test.js',
      'koans/18_about_map_and_set.test.js',
      'koans/19_about_iterators_and_iterables.test.js',
      'koans/20_about_higher_order_functions.test.js',
      'koans/21_about_this_binding.test.js',
      'koans/22_about_prototypes.test.js',
      'koans/23_about_generators.test.js',
      'koans/24_about_proxy.test.js',
      'koans/25_about_error_handling.test.js',
      'koans/26_about_json.test.js',
      'koans/27_about_regular_expressions.test.js',
      'koans/28_about_callbacks.test.js',
      'koans/29_about_promises.test.js',
      'koans/30_about_async_await.test.js',
      'koans/31_about_event_loop.test.js',
      'koans/32_about_dates.test.js',
    ],
    bail: 1,
    fileParallelism: false,
    sequence: { shuffle: false, concurrent: false, sequencer: KoanSequencer },
    reporters: ['default', new KoanReporter()],
  },
});
