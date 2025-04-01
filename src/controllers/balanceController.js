const balanceService = require('../services/balanceService');

class BalanceController {
  async updateBalance(req, res) {
    try {
      const { userId, amount } = req.body;

      if (!userId || amount === undefined) {
        return res.status(400).json({
          error: 'Необходимо указать userId и amount'
        });
      }

      const updatedUser = await balanceService.updateBalance(userId, amount);
      
      res.json({
        success: true,
        data: updatedUser
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message
      });
    }
  }
}

module.exports = new BalanceController(); 