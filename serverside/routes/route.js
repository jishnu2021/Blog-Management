const router = require('express').Router();
const Blog = require('../Models/BlogSchema'); 
const {registerAdmin,loginAdmin}=require('../Controllers/Admin-Controller');
const { uploadBlog , getBlogs} = require('../Controllers/Blog-Controller');
const {GetCourses} = require('../Controllers/Course-Controller')

router.post('/uploadBlog', uploadBlog);
router.post('/adminregister',registerAdmin);
router.post('/adminlogin',loginAdmin);
router.get('/getBlogs', getBlogs);
router.get('/getcourses',GetCourses);
router.get('/blog/:blogId', async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.blogId);
      if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
      }
      res.json(blog); // Return the blog data
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });

module.exports = router;

