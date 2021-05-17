const express = require('express');
const { eventContext } = require('aws-serverless-express/middleware');
const postRoutes = require('./routes/v1/posts');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

connectDB();

// declare a new express app
const app = express();
app.use(eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/posts', postRoutes);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;

app.listen(port);
console.log('Express WebAPI listening on port ' + port);

module.exports = app;
