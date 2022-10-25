import { ViewState,EditingState, IntegratedEditing, ChangeSet } from "@devexpress/dx-react-scheduler";
import { Scheduler,WeekView,Appointments,AppointmentForm } from "@devexpress/dx-react-scheduler-material-ui";
import { useState } from "react";
import { AppBar } from "@mui/material";
import VerticalNavbar from "../components/VerticalNavbar/VerticalNavbar";

export function CalendarTest() {
  let [appointments, setAppointments] = useState([]);
  console.log(appointments)

  const saveAppointment=(data: any)=>{
    setAppointments([...appointments,data.added])
  }
  return (
    <div id="calendar">
      <div className="navbarVertical">
        <VerticalNavbar
          li={[
            ["Dashboard", "img/dashboard.svg"],
            ["Restautant’s", "img/restaurant.svg"],
            ["Manage User’s", "img/manage user.svg"],
            ["Manage Order’s", "img/manage  order.svg"],
            ["Manage Coupon’s", "img/manage coupon.svg"],
          ]}
        />
      </div>
      <div className="calendarDetails">
        <Scheduler data={appointments} height={560}>
          <ViewState />
          <EditingState onCommitChanges={saveAppointment} />
          <IntegratedEditing />
          <WeekView startDayHour={9} endDayHour={19} />
          <Appointments />
          <AppointmentForm />
        </Scheduler>
      </div>
    </div>
  );
}
