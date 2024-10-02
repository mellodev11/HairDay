import dayjs from "dayjs";
import { openInHours } from "../../utils/open-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours");
export function hoursLoad({ date, dailySchedules }) {
  //Limpa a lista de horários
  hours.innerHTML = "";

  //obtem a lista de horarios ocupados
  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format("HH:mm")
  );

  const openning = openInHours.map((hour) => {
    const [scheduleHour] = hour.split(":");

    //Add a hora no date e verifica se está no passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    const available = !unavailableHours.includes(hour) && !isHourPast;

    return { hour, available };
  });
  openning.forEach(({ hour, available }) => {
    const li = document.createElement("li");
    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");

    li.textContent = hour;
    if (hour === "9:00") {
      hourHeaderAdd("Manhã");
    } else if (hour === "13:00") {
      hourHeaderAdd("Tarde");
    } else if (hour === "18:00") {
      hourHeaderAdd("Noite");
    }
    hours.append(li);
  });
  hoursClick();
}

function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;

  hours.append(header);
}
