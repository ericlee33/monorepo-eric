import { Injectable } from '@nestjs/common';

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
    return {
      code: 200,
      data: {
        abc: params.abc === '1' ? 'abc' : 'bcd',
      },
    };
  }
}
