const express = require('express');
const { validationResult } = require('express-validator');
const balanceController = require('../controllers/balanceController');
const { updateBalanceValidator } = require('../validators/balanceValidator');

const router = express.Router();

router.post('/update', updateBalanceValidator, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}, balanceController.updateBalance);

module.exports = router; 