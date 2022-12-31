import { SourceMapConsumer } from 'source-map';
import * as fs from 'fs';
import * as path from 'path';

const rawSourceMap = fs.readFileSync(
  path.resolve(__dirname, './main.bc538dc0.js.map'),
  'utf-8'
);

SourceMapConsumer.with(rawSourceMap, null, (consumer) => {
  const info = consumer.originalPositionFor({
    line: 2,
    column: 331,
  });

  const sourceLine = info.line;
  if (info.source && sourceLine) {
    const sourceCode = consumer.sourceContentFor(info.source);

    const code = sourceCode
      ?.split('\n')
      .slice(sourceLine - 5, sourceLine + 5)
      .join('\n');

    console.log(code);
  }
});
