// Modules
const express = require('express');
// const path = require('path');
const ejs = require('ejs');
const app = express();


//  Middlewares
app.use(express.static('public'));

//  Template Engine
app.set('view engine', 'ejs');

//  Routes
app.get('/', (req, res, ) => {
  // res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('index');
});

app.get('/about', (req, res, ) => {
  // res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('about');
});

app.get('/post', (req, res, ) => {
  // res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('post');
});

app.get('/add_post', (req, res, ) => {
  // res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  res.render('add_post');
});

app.get('*', (req, res) => {
  res.status(404).send('<h3>404-Page Not Found</h3>');
});

const port = 5000;

app.listen(port, () => {
  console.log(`Sunucu port ${port}'de acildi...`);
});
