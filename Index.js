const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Данные о книгах
const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 3, title: '1984', author: 'George Orwell' }
];

// Middleware для обработки JSON
app.use(express.json());

// Маршрут для главной страницы
app.get('/', (req, res) => {
  res.send('Welcome to the Book API!');
});

// Маршрут для получения всех книг
app.get('/books', (req, res) => {
  res.json(books);
});

// Маршрут для получения конкретной книги
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send('Book not found');
  res.json(book);
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
