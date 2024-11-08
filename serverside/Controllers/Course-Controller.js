const mongoose = require('mongoose');
const Course = require('../Models/CourseSchema')

exports.GetCourses = async (req,res)=>{
    try {
        const courses = await Course.find(); // Retrieve all courses from the database
        res.status(200).json(courses); // Respond with the list of courses
      } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve courses' });
      }
}
