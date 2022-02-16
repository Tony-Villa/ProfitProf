const router = require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/income/:id', ctrl.reviews.showAvgRating);

// exports
module.exports = router;
