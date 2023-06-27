## 2023.06.22 提纲

1. 如何在 vue 中使用 渲染函数(h)，jsx（tsx），v-if / v-for / v-bind / v-on 各自怎么写
2. 如何在 vue 中使用 reactive, setup 语法
3. react 中的 jsx 长什么样
4. babel 是什么

- 如何用 babel 做一个去除 console.log 的工具脚本
- 语言的本质是 AST，不同语言的 AST 之间也可以互相转换
  // https://astexplorer.net/

晚间：

- nodejs -> koa.js
  - 如何在 nodejs 使用原生 http 模块启动 web 服务器，原生的有什么缺点，比如没有 ctx.request.query，需要手动拼等等
  - 如何用 koa，调用 mysql。实现一个增删改查的服务器，在前端处调用
  - 如何做 限流 中间件，redis，qps
  - 洋葱圈模型
  - 如何在 koa 中解决跨域问题
  - 如何在 vue 中使用 原生 fetch 调用接口。
- SSR
  www.baidu.com/abc -> 不会打到前端 vue-router

  // nuxt 框架 nodejs 服务和 vue

  .vue nodejs / vue
  nodejs 拉接口取数据
  交给前端，渲染页面，拼接好了 html，再吐给 nodejs
  nodejs 最后返回 ctx.body = html 字符串

  SSR -> SEO 体验满分

  // 无前端路由，php, java web,
  nodejs -> router.get('/abc', ( ) => {
  const res = await axios.get()

  -> vue

  nodejs -> index.html ctx.body
  })

//

- 如何用 webpack 从 0 搭一个 vue 项目
  - babel-loader
    - 如何配置 loader
    - 如何在 webpack 中使用 babel-loader 做额外扩展
  - 性能优化
    - 打包压缩 tenserPlugin
    - 静态资源转 base64
    - SW
    - hash
    - 拆包
  - 打包配置项都是做什么的
  - 手写一个 webpack loader
  - 手写一个 webpack plugin
- eslint 是什么，怎么使用

其它额外项目（未来传授）

- CLI：如何自己实现一个类 Vue-cli， commander.js /inquier.js

- 自动化测试：cypress 是什么，怎么使用，抢票自动化脚本

- 单元测试：如何在前端里用 jest 写单元测试

- docker，k8s，compose

## 2023.06.23 提纲

1. esm 和 commonjs 的区别(import / require, export/ module.exports)
2. 分析了 server.js 全部逻辑

- source-map -> reportMiddleware
- proxyMiddleware
- statics

3. CLI

- inquirer -> 交互工具
- commander -> 支持传参数
- fs-extra -> 解决 fs promise 兼容性问题 + copyDir 等操作不支持
- chalk 加颜色的
- ora 转圈的

4. publish，发包，如何用 typescript 写 node

### 晚间

作业 vue3(tsx 只写一个文件) 语法 + setup（严禁出来任何 data / methods 字段） + koa(mysql + docker(15 分钟) + cors-middlewares)

- todolist 前后端 + mysql

- 使用写一个 templates 复制器， less 复制出来 less,scss 复制出来 scss

- spawn
