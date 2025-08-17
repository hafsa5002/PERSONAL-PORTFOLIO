const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set('view engine', 'ejs');

// Routes
const messageRouter = require('./routes/messageRoute');
app.use('/message', messageRouter);

// Render portfolio page
app.get('/', (req, res) => {
  res.render('portfolio', { sent: req.query.sent || null });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
