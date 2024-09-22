import { hoursLoad } from "../form/hours-load.js";

//Seleciona o input de data
const selectedDate = document.getElementById("date");
export function schedulesDay() {
  //Obtem a data do Input
  const date = selectedDate.value;

  hoursLoad({ date });
}
