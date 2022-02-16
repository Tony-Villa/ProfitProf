const router = require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/showIncome', (req, res) => {
  res.send('This is the show income endpoint');
});

// exports
module.exports = router;
