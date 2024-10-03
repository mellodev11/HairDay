import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const clientName = document.getElementById("client");

const inputToDay = dayjs(new Date()).format("YYYY-MM-DD");
selectedDate.value = inputToDay;
selectedDate.min = inputToDay;

form.onsubmit = async (e) => {
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

    // faz o agendamento
    await scheduleNew({
      id,
      name,
      when,
    });
    // Recarrega os agendamentos
    await schedulesDay();
    //limpa o imput de nome do cliente
    clientName.value = "";
  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
  }
};
