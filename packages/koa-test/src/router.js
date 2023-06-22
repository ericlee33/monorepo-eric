const router = require('@koa/router')();
const HelloController = require('./controllers/hello');
const mysql = require('mysql');

router.post('/api/hello', async (ctx) => {
  //从ctx中读取get传值

  // console.log(ctx.query); //{ aid: '123' }       获取的是对象   用的最多的方式  **推荐
  // console.log(ctx.querystring); //aid=123&name=zhangsan      获取的是一个字符串
  // console.log(ctx.url); //获取url地址

  // //ctx里面的request里面获取get传值

  // console.log(ctx.request.url);
  // console.log(ctx.request.query); //{ aid: '123', name: 'zhangsan' }  对象
  // console.log(ctx.request.querystring); //aid=123&name=zhangsan

  // const sql = `SELECT 1 + 1 AS solution'`;

  // connection.query(sql, function (error, results, fields) {
  //   if (error) throw error;
  //   console.log('The solution is: ', results[0].solution);
  // });

  ctx.body = {
    a: 1,
  };
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


module.exports = router;
