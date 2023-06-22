const Koa = require('koa');
const app = new Koa();

const router = require('@koa/router')();
// const HelloController = require('./controllers/hello');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'test',
});

connection.connect();

// SSR
router.post('/api/hello', async (ctx) => {
  // vue / react

  ctx.body = rawHtml.replace('{{ xiaoduo }}', xiaoduo);

  //   const res1= await fetch('/api/abc')
  //   const res2 = await fetch('/api/dcd')

  //   await fetch('/api/erer')
  // ctx.body = {

  // }
  //从ctx中读取get传值
  redis.get(ctx.query, results);

  console.log(ctx.query); //{ aid: '123' }       获取的是对象   用的最多的方式  **推荐
  console.log(ctx.querystring); //aid=123&name=zhangsan      获取的是一个字符串
  console.log(ctx.url); //获取url地址

  //ctx里面的request里面获取get传值

  console.log(ctx.request.url);
  console.log(ctx.request.query); //{ aid: '123', name: 'zhangsan' }  对象
  console.log(ctx.request.querystring); //aid=123&name=zhangsan

  ctx.request.query.order = 'ascend';
  const sql = `SELECT a FROM table order by ${ascend}`;

  connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
    ctx.body = {
      code: 200,
      message: 'success',
      results,
    };
  });

  // ctx.body = {
  //   a: 1,
  // };
});

// router.post('/api/create/table', async (ctx) => {

//   const sql = '
//   CREATE TABLE IF NOT EXISTS \`runoob_tbl\`(
//     \`runoob_id\` INT UNSIGNED AUTO_INCREMENT,
//     \`runoob_title\` VARCHAR(100) NOT NULL,
//     \`runoob_author\` VARCHAR(40) NOT NULL,
//     \`submission_date\` DATE,
//     PRIMARY KEY ( \`runoob_id\` )
//   )ENGINE=InnoDB DEFAULT CHARSET=utf8;
// `

//   connection.query(sql, function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
//   });

//   ctx.body = {
//     a: 1,
//   };
// });

// const startMysql = require('./utils/mysql')

// startMysql()

// 中间件 -> 限流拦截器
app.use(async (ctx, next) => {
  // qps 每秒请求量
  // redis -> 内存 -> memory
  // mysql -> 硬盘
  const xiaoduo = redis.get('xiaoduo');

  // if(ctx.request.headers.origin === '') {
  //   ctx.redirect('/')
  // }

  // 此时此刻，服务端正在处理多少个请求
  redis.set('xiaoduo', xiaoduo + 1);

  if (xiaoduo > 100) {
    ctx.status = 500;
    ctx.body = '当前负载过大';
  }

  const startTime = +new Date();
  // request
  console.log(1);

  await next();

  redis.set('xiaoduo', xiaoduo - 1);

  const endTime = +new Date();
  // const endTime -startTime
  // response
  console.log(2);
});

// 解决 跨域 CORS 问题
app.use(async (ctx, next) => {
  console.log(3);
  await next();
  console.log(4);
});

app.use(router.routes()); /*启动路由*/
app.use(router.allowedMethods());

app.use(async (ctx, next) => {
  // ctx.request.

  // {
  //   a: 1
  // }
  // if(ctx.url.includes('/api/hello')) {
  //   ctx.body = {
  //     code: 0,
  //     message: 'success'
  //   };
  // }
  await next();
});

app.listen(3000);

console.log('listen on 3000');
