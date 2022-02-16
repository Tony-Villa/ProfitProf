const router = require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/show/:user_id', ctrl.goals.showGoals);
router.post('/', ctrl.goals.addGoals);
router.put('/:id', ctrl.goals.editGoal);
router.delete('/:id', ctrl.goals.removeGoal);

// exports
module.exports = router;
