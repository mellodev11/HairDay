import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";
const periods = document.querySelectorAll(".period");

// gera o event click para cada lista (manha , tarde , noite)

periods.forEach((periods) => {
  // capturar o evento de click na lista
  periods.addEventListener("click", async (e) => {
    if (e.target.classList.contains("cancel-icon")) {
      //Obter a li pai do elemento clicado
      const item = e.target.closest("li");
      //pega o id do agendamento para remover
      const { id } = item.dataset;
      console.log(id);
      // Confirma que o id foi selecionado
      if (id) {
        //confirma se o usuario quer cancelar
        const isConfirm = confirm("tem certeza que deseja cancelar?");

        if (isConfirm) {
          //faz a requisição na API para cancelar
          await scheduleCancel({ id });
          //recarrega os agendamentos
          schedulesDay();
        }
      }
    }
  });
});
