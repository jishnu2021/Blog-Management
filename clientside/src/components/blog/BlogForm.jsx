import React, { useState } from 'react';

const BlogForm = ({ closeModal }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image); // Append file directly
    formData.append('tag', tags);

    try {
      const response = await fetch('http://localhost:5000/uploadBlog', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (response.ok) {
        console.log('Blog uploaded:', data);
        closeModal(); // Close the modal on success
      } else {
        console.error('Error uploading blog:', data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-11/12 sm:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Add New Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              rows="4"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
            <input
              type="file"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags</label>
            <input
              type="text"
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-400 px-4 py-2 rounded-md hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-indigo-600 px-4 py-2 rounded-md text-white hover:bg-indigo-700"
            >
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
