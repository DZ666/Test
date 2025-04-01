# Balance Service

Сервис для управления балансом пользователей.

## Требования

- Node.js (v14 или выше)
- PostgreSQL (v12 или выше)

## Установка

1. Клонируйте репозиторий
2. Установите зависимости:
```bash
npm install
```

3. Создайте файл `.env` на основе примера и настройте параметры подключения к базе данных:
```
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=balance_db
DB_USER=postgres
DB_PASSWORD=postgres
```

4. Создайте базу данных PostgreSQL с именем `balance_db`

## Запуск

Для запуска в режиме разработки:
```bash
npm run dev
```

Для запуска в продакшн режиме:
```bash
npm start
```

## API Endpoints

### Обновление баланса

POST `/api/balance/update`

Тело запроса:
```json
{
  "userId": 1,
  "amount": -100
}
```

Ответ:
```json
{
  "success": true,
  "data": {
    "id": 1,
    "balance": 9900,
    "updatedAt": "2024-04-01T12:00:00.000Z"
  }
}
```

## Особенности реализации

1. Атомарные операции с балансом
2. Валидация входных данных
3. Защита от отрицательного баланса
4. Автоматическое создание таблиц и начальных данных при запуске
