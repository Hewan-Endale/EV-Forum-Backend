const mysql2 = require("mysql2");
const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const database = process.env.DB_NAME;
const connectionLimit = process.env.DB_CONNECTION_LIMIT;
// console.log({host, user, password, database, connectionLimit});
const dbconnection = mysql2.createPool({
  user: user,
  database: database,
  host: host,
  password: password,
  connectionLimit: connectionLimit || 10,
});

module.exports = dbconnection.promise();
