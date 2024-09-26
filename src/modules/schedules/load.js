import { hoursLoad } from "../form/hours-load.js";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";

//Seleciona o input de data
const selectedDate = document.getElementById("date");
export async function schedulesDay() {
  //Obtem a data do Input
  const date = selectedDate.value;

  //Busca na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date });
  console.log(dailySchedules);
  //renderiza as horas disponiveis
  hoursLoad({ date });
}
