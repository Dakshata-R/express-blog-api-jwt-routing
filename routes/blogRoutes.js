const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const blogCtrl = require('../controllers/blogController');

router.get('/', blogCtrl.getAllBlogs);
router.get('/:id', blogCtrl.getBlogById);
router.post('/', auth, blogCtrl.createBlog);
router.put('/:id', auth, blogCtrl.updateBlog);
router.delete('/:id', auth, blogCtrl.deleteBlog);

module.exports = router;
