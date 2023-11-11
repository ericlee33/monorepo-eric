import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(params) {
    const results = {
      code: 0,
      data: [],
    };
    console.log(results, 4);
    return {
      ...results,
      // data: results.data.filter((t) => t.name.includes(params.name)),
    };
  }
}
