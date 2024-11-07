import React from 'react';
import { FaDollarSign, FaClock, FaChartLine, FaUserShield, FaHandshake, FaHeadset } from 'react-icons/fa';

const BlogManagement = () => {
  const benefits = [
    {
      icon: <FaDollarSign size={24} />,
      title: 'High Earning Potential',
      description:
        'If you have a high-quality website with good metrics, you can earn upwards of $2500 from just Guest Posting alone! Our leading bloggers earned more than $5000 in their best months.',
    },
    {
      icon: <FaClock size={24} />,
      title: 'Payment Within 24-Hours',
      description:
        'Unlike other platforms that have set dates for making payments, on BM publishers can request payments whenever they want. You request a payment; you get it within 24 hours.',
    },
    {
      icon: <FaChartLine size={24} />,
      title: 'High-Quality SEO Articles',
      description:
        'Publishers will get high-quality SEO-friendly articles that will help them improve their site metrics and SEO scores. This will increase their website traffic. Search engines love this content.',
    },
    {
      icon: <FaUserShield size={24} />,
      title: 'Publisher has Final Word',
      description:
        'A Publisher can accept an order or reject the same depending on what they feel is right. The platform or the admin will not do anything to take the decision away from the publisher at any time.',
    },
    {
      icon: <FaHandshake size={24} />,
      title: 'Life-Long Relationships',
      description:
        'BM believes in building the best, and biggest ecosystem of publishers and bloggers in the industry. More than anything else, relationships matter to the platform above anything else.',
    },
    {
      icon: <FaHeadset size={24} />,
      title: '24x7 Support to Publishers',
      description:
        'Any time there is an issue that needs to be resolved, our Support Team will be there to help you. This relates to anything from substandard content to payment requests and processing.',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-20" style={{paddingTop:'2rem',paddingBottom:'2rem'}}>
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Why 40,000+ Publishers Have Chosen BM</h1>
        <p className="text-gray-600 mt-4">Here’s why publishers love working with BM:</p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300"
          >
            <div className="text-indigo-500 mb-4 flex items-center justify-center">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogManagement;
