import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeedbackButton from '../components/FeedbackButton';

import HomePage from '../pages/Home/Home';
import AboutUs from '../pages/Home/AboutUs';
import ContactUs from '../pages/Home/ContactUs';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import ProfilePage from '../pages/ProfilePage';
import BikeListPage from '../pages/BikeListPage';
import EditBikePage from '../pages/EditBikePage';
import AddBikePage from '../pages/AddBikePage';
import UserListPage from '../pages/UserListPage';
import Bookings from '../pages/Bookings';
import UserProfile from '../components/UserProfile';
import AllBookings from '../pages/AllBookings';

const AppRoutes = () => {
  const location = useLocation();
  const specialPages = ['/', '/about-us', '/contact-us', '/update-profile'];
  const isHomePage = specialPages.includes(location.pathname);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/bikes" element={<BikeListPage />} />
        <Route path="/bikes/edit/:id" element={<EditBikePage />} />
        <Route path="/bikes/addbike" element={<AddBikePage />} />
        <Route path="/users" element={<UserListPage />} />
        <Route path="/bookings/:id" element={<Bookings />} />
        <Route path="/update-profile" element={<UserProfile />} />
        <Route path="/allbookings" element={<AllBookings />} />
        <Route path="*" element={<div className="text-center p-5">404 - Page Not Found</div>} />
      </Routes>

      <Footer isHomePage={isHomePage} />
      <FeedbackButton />
    </>
  );
};

export default AppRoutes;
