const pool = require('../db_config/db');
require('dotenv').config();

const showIncome = async (res, req) => {
  try {
    const income = await pool.query('SELECT * FROM income WHERE user_id = $1'[req.params.user_id]);

    res.status(200).json({ income: income.rows });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addIncome = async (req, res) => {
  try {
    const income = await pool.query(
      `INSERT INTO income (user_id, fixed_income, variable_income) VALUES ($1,$2,$3) RETURNING *`,
      [user_id, fixed_income, variable_income]
    );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  showIncome,
  addIncome,
};
