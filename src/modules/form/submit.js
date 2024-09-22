import dayjs from "dayjs";
const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

const inputToDay = dayjs(new Date()).format("YYYY-MM-DD");
selectedDate.value = inputToDay;
selectedDate.min = inputToDay;

form.onsubmit = (e) => {
  e.preventDefault();
};
