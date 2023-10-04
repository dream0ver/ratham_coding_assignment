const pg = require("pg");
pg.types.setTypeParser(1082, function (value) {
  return value;
});
const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.DB,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});
module.exports = pool;
