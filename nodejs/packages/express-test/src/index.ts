import express from 'express';
import Logger from './Logger';
import BodyParser from 'body-parser';
import fs from 'fs-extra';
import path from 'path';
import zlib from 'zlib';

const app = express();
// parse application/json
app.use(BodyParser.json());

// Single routing
const router = express.Router();

router.post('/report/logs', function (req, res) {
  console.log(req.body.message);
  const log = Logger.info(req.body.message);
  console.log(log, 3);

  fs.appendFileSync(Logger.logFilePath, log, 'utf-8');

  const gzip = zlib.createGzip();
  const inp = fs.createReadStream(Logger.logFilePath);
  const out = fs.createWriteStream('test.txt.gz');
  inp.pipe(gzip).pipe(out);

  res.end(
    JSON.stringify({
      code: 200,
      data: null,
      message: 'success',
    })
  );
});

// setInterval(() => {
//   fs.removeSync(Logger.logFilePath);
// }, 1000 * 5);

app.use(router);

app.listen(3003, () => {
  console.log('started');
});
