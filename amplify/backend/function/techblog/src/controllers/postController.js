const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
const Post = require('../models/postModel');
/**
 * Fetch all posts
 * GET /posts
 */

exports.getPosts = asyncHandler(async (req, res) => {
  Post.find({}, (error, post) => {
    if (error) res.send(error);
    res.json(post);
  });
});

/**
 * Add new post
 * POST /posts
 */

exports.addPost = asyncHandler(async (req, res) => {
  const newPost = new Post(req.body);

  newPost.save((error, post) => {
    if (error) res.send(error);
    res.json(post);
  });
});

/**
 * Delete post
 * DELETE /posts/:postId
 */

exports.deletePost = asyncHandler(async (req, res) => {
  Post.deleteOne(
    {
      _id: req.params.postId,
    },
    (error) => {
      if (error) res.send(error);
      res.json({ message: 'Post successfully deleted' });
    },
  );
});

/**
 * Update post
 * PATCH /posts/:postId
 */

exports.updatePost = asyncHandler(async (req, res) => {
  Post.findOneAndUpdate(
    {
      _id: req.params.postId,
    },
    req.body,
    { new: true },
    (error, post) => {
      if (error) res.send(error);
      res.json(post);
    },
  );
});
