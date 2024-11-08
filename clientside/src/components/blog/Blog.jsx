import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogForm from './BlogForm';

const Blog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_CLIENT_SIDE}/getBlogs`);
        const data = await response.json();
        if (response.ok) {
          setBlogs(data);
        } else {
          console.error('Failed to fetch blogs:', data.error);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleViewDetails = (blogId) => {
    navigate(`/blog/${blogId}`); // Redirect to blog details page
  };

  return (
    <div style={{ marginTop: '5rem' }}>
      <header className="bg-indigo-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl">Blogs Content</h1>
          <button
            onClick={openModal}
            className="bg-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-800"
          >
            Add Blog
          </button>
        </div>
      </header>

      <main className="container mx-auto py-6">
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {blogs.map((blog) => (
              <div key={blog._id} className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={`${import.meta.env.VITE_CLIENT_SIDE}/${blog.image}`}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-2">
                  {blog.content.substring(0, 100)}... {/* Preview content */}
                </p>
                <div className="flex items-center justify-between">
                  <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                    {blog.tag}
                  </span>
                  <button
                    onClick={() => handleViewDetails(blog._id)}
                    className="text-indigo-600 hover:underline"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No blogs available</p>
        )}
      </main>

      {isModalOpen && <BlogForm closeModal={closeModal} />}
    </div>
  );
};

export default Blog;
