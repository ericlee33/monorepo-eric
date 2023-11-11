router.post('/api/hello', async (ctx) => {
  //从ctx中读取get传值

  // console.log(ctx.query); //{ aid: '123' }       获取的是对象   用的最多的方式  **推荐
  // console.log(ctx.querystring); //aid=123&name=zhangsan      获取的是一个字符串
  // console.log(ctx.url); //获取url地址

  // //ctx里面的request里面获取get传值

  // console.log(ctx.request.url);
  // console.log(ctx.request.query); //{ aid: '123', name: 'zhangsan' }  对象
  // console.log(ctx.request.querystring); //aid=123&name=zhangsan

  ctx.body = {
    a: 1,
  };
});

module.exports = router;
