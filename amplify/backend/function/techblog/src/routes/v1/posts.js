const express = require('express');
const { addPost, deletePost, getPosts, updatePost } = require('../../controllers/postController');

const router = express.Router();

// GET POST
router.route('/').get(getPosts).post(addPost);

// DELETE PATCH
router.route('/:postId').delete(deletePost).patch(updatePost);

module.exports = router;
