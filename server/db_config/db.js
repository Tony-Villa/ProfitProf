const Pool = require('pg').Pool;
require('dotenv').config();

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

const pool = new Pool({
  user: 'postgres',
  password: 'tony123',
  host: 'localhost',
  port: '5432',
  database: 'profitprofauth',
});

module.exports = pool;
