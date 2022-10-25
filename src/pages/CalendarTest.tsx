import { ViewState,EditingState, IntegratedEditing, ChangeSet } from "@devexpress/dx-react-scheduler";
import { Scheduler,WeekView,Appointments,AppointmentForm } from "@devexpress/dx-react-scheduler-material-ui";
import { useState } from "react";

export function CalendarTest() {
  let [appointments, setAppointments] = useState();

  const saveAppointment=(data:any)=>{
    setAppointments([...appointments,data.added])
  }
  return (
    <div id="calendar">
      <Scheduler data={appointments} height={660}>
        <ViewState />
        <EditingState onCommitChanges={saveAppointment} />
        <IntegratedEditing />
        <WeekView startDayHour={9} endDayHour={19} />
        <Appointments />
        <AppointmentForm />
      </Scheduler>
    </div>
  );
}
