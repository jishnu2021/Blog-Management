// src/pages/PaymentPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentInfo, setPaymentInfo] = useState({ cardNumber: "", cardExpiry: "", cardCVV: "", upiId: "" });
  const [otp, setOtp] = useState("");
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [showOtpVerification, setShowOtpVerification] = useState(false);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const navigate = useNavigate();

  // Handle OTP Submit
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp === "123456") { // Mock OTP for demo purposes
      setIsPaymentSuccessful(true);
      alert("Payment Successful!");
      navigate("/payment-success");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  // Handle Payment Method Change
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    setShowPaymentForm(true);
  };

  // Handle Payment Information Change
  const handlePaymentInfoChange = (e) => {
    setPaymentInfo({
      ...paymentInfo,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit Payment (trigger OTP)
  const handleSubmitPayment = () => {
    setShowOtpVerification(true);
    // Here you can add the actual API call to process the payment
    // After the payment is processed, OTP will be sent to the user.
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-semibold text-center mb-8">Payment Page</h1>

        {/* Payment Method Selection */}
        {!showOtpVerification && !isPaymentSuccessful && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Select Payment Method</h3>
            <div className="space-y-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="creditCard"
                  checked={paymentMethod === "creditCard"}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                Credit Card
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="debitCard"
                  checked={paymentMethod === "debitCard"}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                Debit Card
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="upi"
                  checked={paymentMethod === "upi"}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                UPI (Unified Payments Interface)
              </label>
            </div>
          </div>
        )}

        {/* Payment Information Form */}
        {showPaymentForm && !showOtpVerification && !isPaymentSuccessful && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Enter Payment Details</h3>
            <form>
              {paymentMethod === "creditCard" || paymentMethod === "debitCard" ? (
                <>
                  <input
                    type="text"
                    name="cardNumber"
                    value={paymentInfo.cardNumber}
                    onChange={handlePaymentInfoChange}
                    placeholder="Card Number"
                    className="w-full border border-gray-300 p-2 rounded-md mb-4"
                    required
                  />
                  <input
                    type="text"
                    name="cardExpiry"
                    value={paymentInfo.cardExpiry}
                    onChange={handlePaymentInfoChange}
                    placeholder="Expiry Date (MM/YY)"
                    className="w-full border border-gray-300 p-2 rounded-md mb-4"
                    required
                  />
                  <input
                    type="text"
                    name="cardCVV"
                    value={paymentInfo.cardCVV}
                    onChange={handlePaymentInfoChange}
                    placeholder="CVV"
                    className="w-full border border-gray-300 p-2 rounded-md mb-4"
                    required
                  />
                </>
              ) : paymentMethod === "upi" ? (
                <input
                  type="text"
                  name="upiId"
                  value={paymentInfo.upiId}
                  onChange={handlePaymentInfoChange}
                  placeholder="Enter UPI ID"
                  className="w-full border border-gray-300 p-2 rounded-md mb-4"
                  required
                />
              ) : null}
            </form>
            <div className="mt-6">
              <button
                onClick={handleSubmitPayment}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Submit Payment
              </button>
            </div>
          </div>
        )}

        {/* OTP Verification */}
        {showOtpVerification && !isPaymentSuccessful && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">OTP Verification</h3>
            <p className="text-gray-600 mb-4">Enter the OTP sent to your phone:</p>
            <form onSubmit={handleOtpSubmit}>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full border border-gray-300 p-2 rounded-md mb-4"
                required
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200"
              >
                Verify OTP
              </button>
            </form>
          </div>
        )}

        {/* Payment Success */}
        {isPaymentSuccessful && (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-500 mb-4">Payment Successful!</h2>
            <p>Your payment has been successfully processed. Thank you for your purchase.</p>
            <div className="mt-4">
              <button
                onClick={() => navigate("/")}
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Go to Home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
