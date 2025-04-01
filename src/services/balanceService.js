const User = require('../models/User');
const { Op } = require('sequelize');

class BalanceService {
  async updateBalance(userId, amount) {
    const user = await User.findByPk(userId);
    
    if (!user) {
      throw new Error('Пользователь не найден');
    }

    const newBalance = Number(user.balance) + Number(amount);
    
    if (newBalance < 0) {
      throw new Error('Недостаточно средств на балансе');
    }

    // Используем атомарное обновление с проверкой текущего баланса
    const [updatedUser] = await User.update(
      { balance: newBalance },
      {
        where: {
          id: userId,
          balance: {
            [Op.gte]: -amount // Проверяем, что текущий баланс достаточен
          }
        },
        returning: true
      }
    );

    if (!updatedUser) {
      throw new Error('Недостаточно средств на балансе');
    }

    return updatedUser;
  }
}

module.exports = new BalanceService(); 