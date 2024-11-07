import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10" style={{paddingTop:'2rem'}}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Useful Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Useful Links</h3>
            <ul className="text-gray-300">
              <li><a href="#" className="hover:text-indigo-400">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-400">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-indigo-400">Features</a></li>
              <li><a href="#" className="hover:text-indigo-400">Reviews</a></li>
              <li><a href="#" className="hover:text-indigo-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400">Become a Publisher</a></li>
              <li><a href="#" className="hover:text-indigo-400">Seo Metrics</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <ul className="text-gray-300">
              <li><a href="#" className="hover:text-indigo-400">Facebook</a></li>
              <li><a href="#" className="hover:text-indigo-400">LinkedIn</a></li>
              <li><a href="#" className="hover:text-indigo-400">Instagram</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300">For any inquiries, please reach out to us at:</p>
            <p className="text-gray-300">info@blogmanagement.com</p>
          </div>

          {/* Copyright Section */}
          <div className="sm:col-span-2 lg:col-span-4">
            <p className="text-center text-gray-300 mt-4">
              Copyright © 2020 Viacon. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
