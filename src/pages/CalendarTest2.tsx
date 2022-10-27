import {
  ScheduleComponent,
  Inject,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  EventSettingsModel,
} from "@syncfusion/ej2-react-schedule";
// import { DataManager,WebApiAdaptor } from "@syncfusion/ej2-data";
import { DataManager, ODataV4Adaptor } from "@syncfusion/ej2-data";
import { useEffect, useState } from "react";

export function CalendarsTest2() {
  let [appointmentss, setAppointments] = useState([]);
  console.log(appointmentss);

  useEffect(() => {
    fetch("http://localhost:4000/appointments")
      .then((res) => res.json())
      .then((resp) => setAppointments(resp));
  }, []);
  const appointments: EventSettingsModel = {
    dataSource: [
      {
        Subject: "Hello",
        EndTime: new Date(2022, 9, 28, 10, 30),
        StartTime: new Date(2022, 9, 28, 9, 30),
        id: 2,
        bussineId: 2,
      },
    ],
  };

  const dataManager = new DataManager({
    url: "http://localhost:4000/appointments",
    adaptor: new ODataV4Adaptor(),
  });

  console.log(dataManager);

  return (
    <div className="calendarDetails">
      <ScheduleComponent eventSettings={appointments}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  );
}
