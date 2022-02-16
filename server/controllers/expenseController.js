const pool = require('../db_config/db');
require('dotenv').config();

const showExpenses = async (req, res) => {
  try {
    const expenses = await pool.query('SELECT * FROM expenses WHERE user_id = $1', [req.params.user_id]);

    res.status(200).json({ expenses: expenses.rows });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
};

const addExpense = async (req, res, next) => {
  try {
    const { user_id, expense_type, expense_subtype, description, value } = req.body;

    const newExpense = await pool.query(
      'INSERT INTO expenses (user_id, expense_type,expense_subtype,description, value) VALUES ($1,$2,$3,$4,$5) RETURNING *',
      [user_id, expense_type, expense_subtype, description, value]
    );

    res.json({ expense: newExpense.rows[0] });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

const removeExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedExpense = await pool.query('DELETE FROM expenses WHERE id = $1', [id]);

    res.json('Expense item was removed');
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

module.exports = {
  showExpenses,
  addExpense,
  removeExpense,
};
