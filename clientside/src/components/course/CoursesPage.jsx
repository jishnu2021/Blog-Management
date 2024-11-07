// src/pages/CoursesPage.jsx

import React from 'react';

// Sample course data (replace this with your actual data)
const courses = [
  {
    id: 1,
    title: "MERN Stack Development",
    description: "Learn full-stack development using MongoDB, Express.js, React, and Node.js.",
    imageUrl: "https://via.placeholder.com/150",
    price: "$99",
  },
  {
    id: 2,
    title: "Machine Learning & Data Science",
    description: "Master the essentials of machine learning and data analysis with Python.",
    imageUrl: "https://via.placeholder.com/150",
    price: "$120",
  },
  {
    id: 3,
    title: "Blockchain Basics",
    description: "Understand the fundamentals of blockchain technology and its applications.",
    imageUrl: "https://via.placeholder.com/150",
    price: "$89",
  },
  {
    id: 2,
    title: "Machine Learning & Data Science",
    description: "Master the essentials of machine learning and data analysis with Python.",
    imageUrl: "https://via.placeholder.com/150",
    price: "$120",
  },
  {
    id: 3,
    title: "Blockchain Basics",
    description: "Understand the fundamentals of blockchain technology and its applications.",
    imageUrl: "https://via.placeholder.com/150",
    price: "$89",
  },
  {
    id: 2,
    title: "Machine Learning & Data Science",
    description: "Master the essentials of machine learning and data analysis with Python.",
    imageUrl: "https://via.placeholder.com/150",
    price: "$120",
  },
  {
    id: 3,
    title: "Blockchain Basics",
    description: "Understand the fundamentals of blockchain technology and its applications.",
    imageUrl: "https://via.placeholder.com/150",
    price: "$89",
  },
  // Add more courses here...
];

const CoursesPage = () => {
  return (
    <div className="min-h-screen p-6" style={{marginTop:'5rem'}}>
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-10">Our Courses</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">{course.title}</h2>
                <p className="text-gray-600 mt-2">{course.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">{course.price}</span>
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
