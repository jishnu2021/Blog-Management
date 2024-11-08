import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_CLIENT_SIDE}/blog/${blogId}`);
        const data = await response.json();

        if (response.ok) {
          setBlog(data);
        } else {
          console.error('Failed to fetch blog details:', data.error);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchBlogDetails();
  }, [blogId]);

  if (!blog) {
    return <p>Loading...</p>;
  }

  const imageUrl = `${import.meta.env.VITE_CLIENT_SIDE}/${blog.image}`;
  console.log("The image is",imageUrl)

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">{blog.title}</h1>
      <img
        src={imageUrl}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
        onError={(e) => e.target.src = '/default-image.jpg'} // Fallback image
      />
      <p className="text-gray-800 mb-2">{blog.content}</p>
      <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
        {blog.tag}
      </span>
    </div>
  );
};

export default BlogDetails;
