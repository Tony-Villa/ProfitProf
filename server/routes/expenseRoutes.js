const router = require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/show/:user_id', ctrl.expenses.showExpenses);
router.post('/', ctrl.expenses.addExpense);

// exports
module.exports = router;
