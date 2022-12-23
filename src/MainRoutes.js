import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage/MainPage";
import MountainsPage from "./components/pages/MountainsPage/MountainsPage";
import ShopPage from "./components/pages/ShopPage/ShopPage";
import Footer from "./components/pages/Footer/Footer";

const MainRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<MainPage />} /> */}
      <Route
        path="/"
        element={
          <>
            <MainPage />
            <Footer />
          </>
        }
      />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/mountain" element={<MountainsPage />} />
    </Routes>
  );
};

export default MainRoutes;
