import { BaseSequencer } from 'vitest/node';

// Walk the koans in numeric filename order (01, 02, ... 31) instead of Vitest's
// default size-based ordering. Combined with `bail: 1` and no parallelism, this
// makes the run stop at the first unsolved koan along the path.
function filePath(spec) {
  if (typeof spec === 'string') return spec;
  if (Array.isArray(spec)) return spec[1];
  return spec.moduleId ?? spec.file ?? String(spec);
}

export default class KoanSequencer extends BaseSequencer {
  async sort(files) {
    return [...files].sort((a, b) => filePath(a).localeCompare(filePath(b)));
  }
}
