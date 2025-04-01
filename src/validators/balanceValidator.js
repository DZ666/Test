const { body } = require('express-validator');

const updateBalanceValidator = [
  body('userId')
    .isInt()
    .withMessage('userId должен быть целым числом')
    .toInt(),
  body('amount')
    .isFloat()
    .withMessage('amount должен быть числом с плавающей точкой')
    .toFloat()
];

module.exports = {
  updateBalanceValidator
}; 