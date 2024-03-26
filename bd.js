const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  port:  process.env.port,
  password: process.env.password,
  database:  process.env.database,
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados MySQL.');
});

module.exports = connection;
