const express = require('express');
const sequelize = require('./config/database');
const umzug = require('./config/umzug');
const balanceRoutes = require('./routes/balanceRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/balance', balanceRoutes);

async function startServer() {
  try {
    // Подключаемся к базе данных
    await sequelize.authenticate();
    console.log('Подключение к базе данных успешно установлено.');

    // Запускаем миграции
    await umzug.up();
    console.log('Миграции успешно выполнены.');

    // Запускаем сервер
    app.listen(PORT, () => {
      console.log(`Сервер запущен на порту ${PORT}`);
    });
  } catch (error) {
    console.error('Ошибка при запуске сервера:', error);
    process.exit(1);
  }
}

startServer(); 