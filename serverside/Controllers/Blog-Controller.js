const mongoose = require('mongoose');
const Blog = require('../Models/BlogSchema');
const multer = require('multer');
const path = require('path');

// Set up multer for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Upload folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage }).single('image');

// Upload blog controller
exports.uploadBlog = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: 'Image upload failed' });
    }
    const { title, content, tag } = req.body;
    const image = req.file ? req.file.path : ''; // Path of uploaded image

    try {
      const newBlog = new Blog({
        title,
        content,
        image,
        tag,
      });
      await newBlog.save();
      res.status(201).json({ message: 'Blog uploaded successfully', blog: newBlog });
    } catch (error) {
      res.status(500).json({ error: 'Failed to upload blog' });
    }
  });
};

// In your blog controller
exports.getBlogs = async (req, res) => {
    try {
      const blogs = await Blog.find().sort({ createdAt: -1 });
      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch blogs' });
    }
  };
  