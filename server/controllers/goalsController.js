const pool = require('../db_config/db');
require('dotenv').config();

const showGoals = async (req, res) => {
  try {
    const goals = await pool.query('SELECT * FROM goals WHERE user_id = $1', [req.params.user_id]);

    res.status(200).json({ goals: goals.rows });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
};

const addGoals = async (req, res, next) => {
  try {
    const { user_id, goal_type, goal_subtype, description, total_amount, monthly_cap, current_amount, due_date } =
      req.body;

    const newExpense = await pool.query(
      'INSERT INTO goals (user_id, goal_type, goal_subtype, description, total_amount, monthly_cap,current_amount, due_date) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *',
      [user_id, goal_type, goal_subtype, description, total_amount, monthly_cap, current_amount, due_date]
    );

    res.json({ expense: newExpense.rows[0] });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

const editGoal = async (req, res) => {
  try {
    const { id } = req.params;

    const { goal_type, goal_subtype, description, total_amount, monthly_cap, due_date, current_amount } = req.body;

    const updatedGoal = await pool.query(
      'UPDATE goals SET goal_type = $1, goal_subtype = $2, description = $3, total_amount = $4, monthly_cap = $5, due_date = $6, current_amount = $7 WHERE id = $8',
      [goal_type, goal_subtype, description, total_amount, monthly_cap, due_date, current_amount, id]
    );

    res.status(200).json('Goal was updated!');
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

const removeGoal = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedGoal = await pool.query('DELETE FROM goals WHERE id = $1', [id]);

    res.json('Goal item was removed');
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

module.exports = {
  showGoals,
  addGoals,
  editGoal,
  removeGoal,
};
