import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

// CoursesPage Component
const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

  // Fetch courses from the API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_CLIENT_SIDE}/getcourses`);
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  // Handle course category change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Filter courses based on the selected category
  const filteredCourses = courses.filter(
    (course) => selectedCategory === "All" || course.category === selectedCategory
  );

  // Handle course enrollment
  const handleEnroll = (courseId) => {
    navigate('/payment');
  };

  return (
    <div className="min-h-screen p-6" style={{ marginTop: "5rem" }}>
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold text-center text-gray-800" style={{fontWeight:'700'}}>Our Courses</h1>

        {/* Dropdown for Course Category */}
        <div className="mb-8 flex justify-end">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="border border-gray-300 p-2 rounded-md"
          >
            <option value="All">All Courses</option>
            <option value="Free">Free Courses</option>
            <option value="Premium">Premium Courses</option>
          </select>
        </div>
        {/* Displaying Courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div key={course._id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={course.imageUrl || "https://via.placeholder.com/150"} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">{course.name}</h2>
                <p className="text-gray-600 mt-2">{course.description}</p>
                <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">
                   ${course.price}
                  </span>
                  <button
                    onClick={() => handleEnroll(course._id)}
                    className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                  >
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
