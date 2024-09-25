import dayjs from "dayjs";
const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const clientName = document.getElementById("client");

const inputToDay = dayjs(new Date()).format("YYYY-MM-DD");
selectedDate.value = inputToDay;
selectedDate.min = inputToDay;

form.onsubmit = (e) => {
  e.preventDefault();

  try {
    const name = clientName.value.trim();
    if (!name) {
      return alert("informe o noem do cliente!");
    }
    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("informe a hora");
    }
    const [hour] = hourSelected.innerText.split(":");

    const when = dayjs(selectedDate.value).add(hour, "hour");
    const id = new Date().getTime();
  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
  }
};
