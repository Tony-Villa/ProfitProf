const router = require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/showIncome', ctrl.income.showIncome);

// exports
module.exports = router;
