import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import ProductViewPage from '@modules/ProductCard/ProductView/Partials/ProductViewPage';
import { NavHeader } from '@layout/Partials/NavHeader';
import Mainpage from '@modules/MainPage/Mainpage';
import CustomizedGiftsCarousel from '@modules/CustomizedGifts/Partials/CustomizedGiftsCarousel';
import { Profile } from '@modules/Profile/Partials/Profile';
import AboutUs from '@modules/About/Partials/AboutUs';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/collection" element={<CustomizedGiftsCarousel/>}  />
        <Route path="/enquiry" element={<Profile/>}  />
        <Route path="/cart" element={<ProductViewPage />} />




      </Routes>
      <Outlet />
    </>

  );
};

export default AppRouter;
