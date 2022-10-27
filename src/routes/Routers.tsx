import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Bookings from "../pages/Bookings";
import { Buisness } from "../pages/Buisness";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/buisnesses" element={<Buisness />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
