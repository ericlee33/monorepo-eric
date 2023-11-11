const mysql = require('mysql');

module.exports = () => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test',
  });

  connection.connect();
};
