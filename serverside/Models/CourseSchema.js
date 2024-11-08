const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: String,
    description: String,
    category: String,
    level: String,
    duration: String,
    imageUrl:String,
    instructor: {
      name: String,
      experience: String,
    },
    price: Number,
    startDate: Date,
    topics: [String],
  },{timestamps:true,collection:'courses'});
  
  module.exports = mongoose.model('courses', courseSchema);