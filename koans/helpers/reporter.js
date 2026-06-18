// A tiny Vitest reporter that prints your progress along the path.
//
// It counts how many koans (individual tests) you have passed out of the total,
// draws a meter, and tells you where to meditate next. It is purely cosmetic —
// Vitest's default reporter already shows you the failing assertion.

function collectTests(tasks, out = []) {
  for (const task of tasks ?? []) {
    if (task.type === 'test') {
      out.push(task);
    } else if (task.tasks) {
      collectTests(task.tasks, out);
    }
  }
  return out;
}

function meter(passed, total, width = 30) {
  const ratio = total === 0 ? 0 : passed / total;
  const filled = Math.round(ratio * width);
  return '[' + '#'.repeat(filled) + '.'.repeat(width - filled) + ']';
}

export default class KoanReporter {
  onFinished(files = []) {
    const tests = files.flatMap((file) => collectTests(file.tasks));
    const total = tests.length;
    const passed = tests.filter((t) => t.result?.state === 'pass').length;

    // The first file that still has an unsolved koan is where the work is.
    const stuck = files.find((file) =>
      collectTests(file.tasks).some((t) => t.result?.state !== 'pass'),
    );

    const lines = ['', `your path thus far  ${meter(passed, total)}  ${passed}/${total}`];

    if (stuck) {
      const name = stuck.name.replace(/^.*\//, '');
      lines.push(`The Master says: meditate on ${name}`);
    } else if (total > 0) {
      lines.push('The Master says: you have walked the path. Mountains are merely mountains.');
    }

    // eslint-disable-next-line no-console
    console.log(lines.join('\n') + '\n');
  }
}
