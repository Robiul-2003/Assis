const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname))); // এটা login.html সার্ভ করার জন্য

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === 'test@test.com' && password === '123456') {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
