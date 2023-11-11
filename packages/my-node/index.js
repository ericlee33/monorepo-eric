// const abc = () => console.log(2);

// module.exports = {
//   abc,
// };

const diff = require('diff')

const json1 = {
  a: {
    b: 1
  }
}
const json2 = {
  a: {
    b: 2
  }
}


const res = diff.diffJson(json1, json2)
console.log(res)

const http = require('http');
http
	.createServer(function (request, response) {
		// 发送 HTTP 头部
		// HTTP 状态值: 200 : OK
		// 内容类型: text/plain
		response.writeHead(200, { 'Content-Type': 'text/plain' });

		// 发送响应数据 "Hello World"
		response.end('Hello World\n');
	})
	.listen(8888);