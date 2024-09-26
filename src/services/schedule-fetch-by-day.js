import { apiConfig } from "./api-config";
import dayjs from "dayjs";

export async function scheduleFetchByDay({ date }) {
  try {
    //fazendo a requisição
    const response = await fetch(`${apiConfig.baseURL}/schedules`);
    //converte para JSON
    const data = await response.json();
    //filtra os agendamentos pelo dia selecionado
    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day")
    );
    return dailySchedules;
  } catch (error) {
    alert("Não foi possivel buscar os agendamentos");
  }
}
