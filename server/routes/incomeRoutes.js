const router = require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/show/:user_id', ctrl.income.showIncome);
router.post('/', ctrl.income.addIncome);
router.delete('/:id', ctrl.income.deleteIncome);

// exports
module.exports = router;
