// DEPENDENCIES
const express = require('express');

// CONFIGURATION
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

// MIDDLEWARE
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// ROUTES
app.get('/', (req, res) => {
    res.render('home');
});

app.get('*', (req, res) => {
    res.status(404).send('<h1>ERROR 404: Page Not Found</h1>');
});

// Places
app.use('/places', require('./controllers/places'));

// LISTEN
app.listen(PORT, () => {
    console.log('connected');
});