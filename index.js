const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
    { id: 1, title: "Book One", author: "Author A" },
    { id: 2, title: "Book Two", author: "Author B" }
];

// Get all books
app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/', (req, res) => {
    res.send('Server is working!');
});


// Add a new book
app.post('/books', (req, res) => {
    const book = req.body;
    book.id = books.length + 1;
    books.push(book);
    res.status(201).json(book);
});

// Update a book by ID
app.put('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        books[index] = { id, ...req.body };
        res.json(books[index]);
    } else {
        res.status(404).json({ error: "Book not found" });
    }
});

// Delete a book by ID
app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    books = books.filter(book => book.id !== id);
    res.json({ message: "Book deleted" });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
