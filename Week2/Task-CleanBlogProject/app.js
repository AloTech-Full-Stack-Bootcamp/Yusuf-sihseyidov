// Modules
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejs = require('ejs');
const postController = require('./Controllers/postController');
const pageController = require('./Controllers/pageController');


//  Database Connection
mongoose.connect('mongodb+srv://Yusuf:F5L6xn5WrX8Bb3h@cluster0.lwoix.mongodb.net/cleanblog-db?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


//  Middlewares
app.use(express.static('public'));
// Middleware that is used to simulate DELETE and PUT methods
app.use(
  methodOverride('_method', {
    methods: ['GET', 'POST'],
  })
);
// Middlewares to finish request response loop of web page
app.use(express.urlencoded({ extended: true })); // reads url data
app.use(express.json()); // converts url data to json format


//  Template Engine
app.set('view engine', 'ejs');


//  Routes
app.get('/', postController.getAllPosts);
app.get('/posts/:id', postController.getPost);
app.post('/posts', postController.createPost);
app.put('/posts/:id', postController.updatePost);
app.delete('/posts/:id', postController.deletePost);

app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddpostPage);
app.get('/posts/edit/:id', pageController.getEditPage);

// Not Found Page Controller
app.get('*', (req, res) => {
  res.status(404).send('<h3>404-Page Not Found</h3>');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Sunucu port ${port}'de acildi...`);
});
