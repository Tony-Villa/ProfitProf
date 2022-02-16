const router = require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/income/:id', ctrl.income.showIncome);

// exports
module.exports = router;
