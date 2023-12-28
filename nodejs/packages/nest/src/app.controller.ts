import { Query, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/hello')
  getHello(@Query() query) {
    return this.appService.getHello(query);
  }

  @Post('/api/hello')
  getHelloPost(@Query() query) {
    return this.appService.getHello(query);
  }

  @Get('/api/table/:id')
  getTable(@Query() query) {
    const obj = {
      abc: 1,
    };
    const data = new Array(100).fill(0).map(() => obj);
    return {
      code: 200,
      data,
    };
  }

  @Get('/api/table_cols')
  getTableCols(@Query() query) {
    return {
      code: 0,
      data: [
        {
          dataIndex: 'label',
          label: 'label',
          render:
            '<arco.Space>{value.map(v => <arco.Tag>{JSON.stringify(v)}</arco.Tag>)}</arco.Space>',
        },
      ],
    };
  }

  @Get('/api/mock')
  getMock(@Query() query) {
    return {
      code: 0,
      data: {
        a: 34,
      },
    };
  }
}
