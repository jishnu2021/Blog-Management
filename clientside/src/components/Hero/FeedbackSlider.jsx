import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const FeedbackSection = () => {
  const feedbacks = [
    {
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
      name: 'Sagar',
      title: 'Social Media Magazine',
      feedback:
        "I was hesitant of joining a platform that works through Dashboards. I was more familiar with doing things over email. However, the Support team took me over every small detail and showed me why it is more convenient and easier. Now I can track all the orders and earnings I have made.",
    },
    {
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
      name: 'Avijit',
      title: 'RSL Online',
      feedback:
        "Over the last two years, I have joined at least 7 other platforms like this. Here, I am averaging over 12+ orders a month for the last 6 months. I am very happy with their payment process.",
    },
    {
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
      name: 'Mashum',
      title: 'CEO, Red Hat Media',
      feedback:
        "I have added 17 sites on Blog Management simply because they deliver when it comes to orders! Great support team and anytime payment request. You request payment and you get it. As simple as that!",
    },
    {
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
      name: 'Sandy',
      title: 'Real Wealth Business',
      feedback:
        "This is the true definition of what make money online should be. I spend 30 minutes every day publishing the orders and get paid $100! I feel lucky to have found this platform after a friend referred it to me.",
    },
  ];

  return (
    <div className="bg-gray-100 py-10 px-4" style={{paddingTop:'2rem',paddingBottom:'2rem'}}>
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Feedback from our Publishers on Blog Management</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto px-4">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <img
                src={feedback.image}
                alt={feedback.name}
                className="w-20 h-20 rounded-full border-2 border-indigo-500"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{feedback.name}</h3>
            <p className="text-sm text-indigo-500 mb-2">{feedback.title}</p>
            <FaQuoteLeft className="text-indigo-500 mx-auto mb-3" size={24} />
            <p className="text-gray-600">{feedback.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSection;
