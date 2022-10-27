import {
  ViewState,
  EditingState,
  IntegratedEditing,
  ChangeSet,
  DayView,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentForm,
  ConfirmationDialog,
  EditRecurrenceMenu,
  DragDropProvider,
} from "@devexpress/dx-react-scheduler-material-ui";
import { useEffect, useState } from "react";
import { AppBar } from "@mui/material";
import VerticalNavbar from "../components/VerticalNavbar/VerticalNavbar";
import { Buisness } from "./Buisness";
import { useParams } from "react-router-dom";

type Appointment = {
  id: number;
  serviceId: number;
  startDate: string;
  endDate: string;
  title: string;
  clientId: number;
  businessId: number;
};

export function BuisnessDetails() {
  let [appointments, setAppointments] = useState<Appointment[]>([]);
  console.log(appointments);
  useEffect(() => {
    fetch("http://localhost:4000/appointments")
      .then((res) => res.json())
      .then((resp) => setAppointments(resp));
  }, []);

  const params = useParams()

  const saveAppointment = (data: any) => {
    fetch("http://localhost/4000/appointment", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        startDate: data.added.startDate,
        endDate: data.added.endDate,
        title: data.added.title,
        businessOwnerId: Number(params.id),
        email: "john@email.com",
        id: 2
      }),
    });
    setAppointments([...appointments, data.added]);
  };

  return (
    <div id="calendar">
      <div className="navbarVertical">
        <VerticalNavbar />
      </div>
      <div className="calendarDetails">
        <Scheduler firstDayOfWeek={11} data={appointments} height={560}>
          <ViewState />
          <EditingState onCommitChanges={saveAppointment} />
          <IntegratedEditing />
          <WeekView startDayHour={9} endDayHour={19} />
          <Appointments />
          <ConfirmationDialog />
          <AppointmentForm />
        </Scheduler>
      </div>
    </div>
  );
}

