import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Bookings from "../pages/Bookings";
import { CalendarTest } from "../pages/CalendarTest";
import "../pages/CalendarsTest.css";
import "../components/TopNav/TopNav.css";
import "../components/VerticalNavbar/VerticalNavbar.css";
import { SignInBusiness } from "../pages/SignInBusiness";
import { CalendarsTest2 } from "../pages/CalendarTest2";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/calendartest" element={<CalendarTest />} />
        <Route path="/calendartest2" element={<CalendarsTest2 />} />
        <Route path="/sign-in-business" element={<SignInBusiness />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
