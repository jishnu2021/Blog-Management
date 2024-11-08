import React from "react";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Hero/Home";
import Blog from "./components/blog/Blog";
import BlogDetails from "./components/blog/BlogDetails";
import CoursesPage from "./components/course/CoursesPage";
import AdminRegister from "./components/registeradmin/AdminRegister";
import AdminLogin from "./components/registeradmin/AdminLogin";
import Footer from "./components/footer/Footer";
import PaymentPage from "./components/course/PaymentPage";
import PaymentSuccessPage from "./components/course/PaymentSuccessPage";
import Feature from "./components/feature/Feature";

function App() {
  const location = useLocation(); // Access the current route path

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:blogId" element={<BlogDetails />} />
        <Route exact path="courses" element={<CoursesPage />} />
        <Route path='feature' element={<Feature/>}/>
        <Route path="payment" element={<PaymentPage/>} />
        <Route path="payment-success" element={<PaymentSuccessPage/>} />
        <Route path="adminregister" element={<AdminRegister />} />
        <Route path="adminlogin" element={<AdminLogin />} />
      </Routes>
      {location.pathname === "/" && <Footer />} {/* Render Footer only on Home page */}
    </>
  );
}

export default function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
