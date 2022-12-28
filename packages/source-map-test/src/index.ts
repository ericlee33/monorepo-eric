import { SourceMapConsumer } from 'source-map';
import * as fs from 'fs';
import * as path from 'path';
// const { SourceMapConsumer } = require('source-map');
// const fs = require('fs');
// const path = require('path');

const rawSourceMap = fs.readFileSync(
  path.resolve(__dirname, './main.2d490780.js.map'),
  'utf-8'
);

const parse = async () => {
  const whatever = await SourceMapConsumer.with(
    rawSourceMap,
    null,
    (consumer) => {
      console.log(
        consumer.originalPositionFor({
          line: 32,
          column: 1,
        })
      );
    }
  );
};
parse();
