import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Bookings from "../pages/Bookings";
import Calendars from "../pages/Calendars";
import "../pages/Calendars.css"
import { CalendarTest } from "../pages/CalendarTest";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/calendars" element={<Calendars />} />
        <Route path="/calendarsTest" element={<CalendarTest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
