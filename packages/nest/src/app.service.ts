import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(params) {
    const results = {
      code: 200,
      data: {
        items: [
          {
            name: 'abcd',
          },
        ],
        page: 1,
        page_size: 10,
        total: 47,
      },
    };
    return {
      ...results,
      // data: results.data.filter((t) => t.name.includes(params.name)),
    };
  }
}
