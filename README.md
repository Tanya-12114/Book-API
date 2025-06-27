# Book API

A simple REST API endpoints (GET, POST, PUT, DELETE) to manage a list of books using Node.js and Express.  
This project supports basic CRUD operations (Create, Read, Update, Delete), with data stored in memory (no database used).

---

## Features

- **GET** `/books` – Retrieve all books  
- **POST** `/books` – Add a new book  
- **PUT** `/books/:id` – Update a book by ID  
- **DELETE** `/books/:id` – Delete a book by ID  

---

## Setup Instructions

### 1. Clone the repository (or download this folder)
```bash
git clone https://github.com/your-username/book-api.git
cd book-api
```
### 2. Initialize the Project
```bash
npm init -y
```
### 3. Install Dependencies
```bash
npm install express
```
### 4. Start the Server
```bash
node index.js
```
### Server will run at:
http://localhost:3000

### Tools Used:
- Node.js
- Express.js
- Postman (for API testing)

