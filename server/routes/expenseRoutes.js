const router = require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/show/:user_id', ctrl.expenses.showExpenses);

// exports
module.exports = router;
