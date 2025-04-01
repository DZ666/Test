const express = require('express');
const { validationResult } = require('express-validator');
const balanceController = require('../controllers/balanceController');
const { updateBalanceValidator } = require('../validators/balanceValidator');

const router = express.Router();

/**
 * @swagger
 * /balance/update:
 *   post:
 *     summary: Обновление баланса пользователя
 *     description: Обновляет баланс пользователя на указанную сумму
 *     tags:
 *       - balance
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *                 description: ID пользователя
 *               amount:
 *                 type: number
 */
router.post('/update', updateBalanceValidator, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}, balanceController.updateBalance);

module.exports = router; 