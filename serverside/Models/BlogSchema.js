const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{ type: String, required: true },
    content:{ type: String, required: true },
    image:{ type: String, required: true },
    tag:{ type: String, required: true },
},{timestamps:true,collection:'blogs'})


module.exports = mongoose.model('Blogs',blogSchema);