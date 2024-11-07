import React from 'react';
import hero from '../../assets/hero.jpg'
const BlogManagementInfo = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10 px-4" style={{paddingTop:'2rem',paddingBottom:'2rem'}}>
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-10">
        
        {/* Left Side - Text Section */}
        <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">What Is Blog Management?</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Blog Management is a platform that aims to help Publishers, Bloggers, and Website Owners monetize their blog.
            The platform helps them with earning a lot of money by publishing Guest Posts on their websites. Publishers get
            regular orders with high-quality content and instant payment upon completion and submission of the Live URL. In
            the last two years, Blog Management has paid over 40,000 Publishers a total of $2 Million! This is the biggest and
            most profitable platform to sell guest posts and earn money.
          </p>
        </div>

        {/* Right Side - Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <img
          style={{width:'100rem'}}
            src={hero} // Replace with your image URL
            alt="Blog Management Illustration"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogManagementInfo;
