// src/pages/PaymentSuccessPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 p-6">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-green-600 mb-6">Payment Successful!</h2>
        <p className="text-lg text-gray-700 mb-4">
          Thank you for your purchase. Your transaction has been processed successfully.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
