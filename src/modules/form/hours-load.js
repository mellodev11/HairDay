import dayjs from "dayjs";
import { openInHours } from "../../utils/open-hours.js";
export function hoursLoad({ date }) {
  const openning = openInHours.map((hour) => {
    const [scheduleHour] = hour.split(":");

    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    console.log({ hour, avaliable: isHourPast });
  });
}
