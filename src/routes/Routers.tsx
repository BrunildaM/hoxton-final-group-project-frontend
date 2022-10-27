import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Bookings from "../pages/Bookings";
import { Buisness } from "../pages/Buisness";
import { CalendarTest } from "../pages/CalendarTest";
import "../pages/CalendarsTest.css";
import "../components/TopNav/TopNav.css";
import "../components/VerticalNavbar/VerticalNavbar.css";
import { SignInBusiness } from "../pages/SignInBusiness";
import { SignUpBusiness } from "../pages/SignUpBusiness";
import { SignInClient } from "../pages/SignInClient";
import { SignUpClient } from "../pages/SignUpClient";
import { BuisnessDetails } from "../pages/BuisnessDetails";

const Routers = () => {
  return (
<<<<<<< HEAD
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/buisnesses" element={<Buisness />} />
      <Route path="/calendartest" element={<CalendarTest />} />
      <Route path="/sign-in-business" element={<SignInBusiness />} />
      <Route path="/sign-up-business" element={<SignUpBusiness />} />
      <Route path="/sign-in-client" element={<SignInClient />} />
      <Route path="/sign-up-client" element={<SignUpClient />} />
    </Routes>
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/buisnesses" element={<Buisness />} />
        <Route path="/buisnesses/:id" element={<BuisnessDetails />} />
        <Route path="/calendartest" element={<CalendarTest />} />
        <Route path="/sign-in-business" element={<SignInBusiness />} />
        <Route path="/sign-up-business" element={<SignUpBusiness />} />
        <Route path="/sign-in-client" element={<SignInClient />} />
        <Route path="/sign-up-client" element={<SignUpClient />} />
      </Routes>
    </BrowserRouter>
>>>>>>> 7e0aea3c71b9f384cf4ff7cbcdca5282b0ef749d
  );
};

export default Routers;
