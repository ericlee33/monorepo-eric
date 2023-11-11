const http = require('http');

// '/api/abc?a=1&b=2'
// koa
http.createClient((request, response) => {
  // response.query
  // const query = split('?')[1].split('&')

  if (request.url === '/api/abc') {
    response.body = {
      code: 0,
      data: {
        ccc: '',
      },
    };
  }
}, 3000);
