const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3001;

// Включаем CORS для всех запросов
app.use(cors());

// Middleware для парсинга JSON
app.use(express.json());

// Путь к файлу с данными
const productsPath = path.join(__dirname, '../public/db/products.json');

// GET /api/products - получить все товары
app.get('/api/products', (req, res) => {
  try {
    const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при чтении данных' });
  }
});

// POST /api/products - добавить новый товар
app.post('/api/products', (req, res) => {
  try {
    const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
    const newProduct = {
      id: products.length + 1,
      ...req.body
    };
    products.push(newProduct);
    fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при добавлении товара' });
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер API запущен на http://localhost:${port}`);
}); 