import React from 'react';
import { FaUserPlus, FaClipboardCheck, FaLink, FaWallet } from 'react-icons/fa';

const PlatformWorkflow = () => {
  const steps = [
    {
      icon: <FaUserPlus size={24} />,
      title: 'Sign Up and List Your Website',
      description: `Click on the Sign Up button and enter the details. Once you finish the Sign Up, list down the websites where you are the 'owner'. Listing is an easy process that you can complete within 15 minutes.`,
    },
    {
      icon: <FaClipboardCheck size={24} />,
      title: 'Receive the Order Details and Publish',
      description: `Every time an advertiser chooses your website, you will receive a notification on your dashboard and through email. You need to publish the content with the anchor text and link ASAP.`,
    },
    {
      icon: <FaLink size={24} />,
      title: 'Share the Live URL on the Platform',
      description: `Once you are done with the publishing, you need to submit the Live URL on the dashboard. Our team will evaluate and review to see that the anchor text and link are alright or not. This is a very fast process.`,
    },
    {
      icon: <FaWallet size={24} />,
      title: 'Request Payment and Get Paid',
      description: `Once everything is checked out, you will see the order amount reflect on your Wallet. If you want the platform to pay, you simply need to make a request. The payment will be processed within 24 hours.`,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4" style={{paddingTop:'2rem',paddingBottom:'2rem'}}>
      <div className="container mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">How the Platform Works for Publishers</h1>
        <p className="text-gray-600">Follow these simple steps to get started on BM.</p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300"
          >
            <div className="text-indigo-500 mb-4 flex items-center justify-center">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformWorkflow;
