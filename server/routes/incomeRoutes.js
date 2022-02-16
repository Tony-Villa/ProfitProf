const router = require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/:user_id', ctrl.income.showIncome);

// exports
module.exports = router;
