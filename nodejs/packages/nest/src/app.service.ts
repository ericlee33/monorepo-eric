import { Injectable, HttpCode, HttpStatus } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(params) {
    // return {
    //   code: 200,
    //   data: [
    //     {
    //       label: params.abc === '1' ? 123 : 456,
    //     },
    //   ],
    // };
    // return res.status(400).send('Bad Request');

    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve({
          code: 200,
          // data: {
          //   abc: params.abc === '1' ? 'abc' : 'bcd',
          // },
          data: [
            {
              label: '123',
              value: '32',
            },
          ],
        });
      }, 500);
    });
  }
}
