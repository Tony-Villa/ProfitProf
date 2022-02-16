const pool = require('../db_config/db');
require('dotenv').config();

const showIncome = (res, req) => {
  try {
    const income = await pool.query('SELECT * FROM income WHERE user_id = $1'[req.body.user_id]);

    res.status(200).json({ income: income.rows });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};
