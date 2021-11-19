// Modules
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const path = require('path');
const methodOverride = require('method-override');
const ejs = require('ejs');
const Post = require('./models/Post');

//  Database Connection
mongoose.connect('mongodb://localhost/cleanBlog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//  Middlewares
app.use(express.static('public'));
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
app.get('/', async (req, res) => {
  const posts = await Post.find({}).sort('-dateCreated');
  res.render('index', {
    posts,
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/posts/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', {
    post,
  });
  // res.render('post');
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
});

app.get('/posts/edit/:id', async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  res.render('edit', {
    post,
  });
});

app.post('/posts', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
});

app.put('/posts/:id', async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  post.postTitle = req.body.postTitle;
  post.postSubtitle = req.body.postSubtitle;
  post.save();
  res.redirect(`/posts/${req.params.id}`);
});

app.delete('/posts/:id', async (req, res) => {
  await Post.findByIdAndRemove(req.params.id);
  res.redirect('/');
});

app.get('*', (req, res) => {
  res.status(404).send('<h3>404-Page Not Found</h3>');
});

const port = 5000;

app.listen(port, () => {
  console.log(`Sunucu port ${port}'de acildi...`);
});
