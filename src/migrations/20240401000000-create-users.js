const { DataTypes } = require('sequelize');

module.exports = {
  async up({ context }, _Sequelize) {
    await context.createTable('users', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      balance: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
    });

    await context.bulkInsert('users', [{
      balance: 10000,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down({ context }, _Sequelize) {
    await context.dropTable('users');
  }
}; 