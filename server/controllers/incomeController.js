const pool = require('../db_config/db');
require('dotenv').config();

// const showIncome = async (res, req) => {
//   try {
//     const income = await pool.query('SELECT * FROM income WHERE user_id = $1', [req.params.user_id]);

//     res.status(200).json({ income: income.rows });
//   } catch (err) {
//     console.log(err.message);
//     res.status(500).send('Server Error');
//   }
// };

const showIncome = async (req, res) => {
  //   try {
  // const income = await pool.query('SELECT * FROM income WHERE user_id = $1', [req.params.user_id]);
  res.send('This is the show income endpoint via controller');

  //   res.status(200).json({ income: income.rows });
  //   } catch (err) {
  //     console.log(err.message);
  //     res.status(500).send('Server Error');
  //   }
};

// const showIncome = async (res, req) => {
//   res.send(`This is show income end point`);
// };

const addIncome = async (req, res) => {
  try {
    const { user_id, fixed_income, variable_income } = req.body;

    const income = await pool.query(
      'INSERT INTO income (user_id, fixed_income, variable_income) VALUES ($1,$2,$3) RETURNING *',
      [user_id, fixed_income, variable_income]
    );

    res.status(200).json({ income: income.rows[0] });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteIncome = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteIncome = await pool.query('DELETE FROM income WHERE id = $1', [id]);

    res.json('Income item was deleted');
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

module.exports = {
  showIncome,
  addIncome,
  deleteIncome,
};
