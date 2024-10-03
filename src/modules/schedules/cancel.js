const periods = document.querySelectorAll(".period");

// gera o event click para cada lista (manha , tarde , noite)

periods.forEach((periods) => {
  // capturar o evento de click na lista
  periods.addEventListener("click", (e) => {
    if (e.target.classList.contains("cancel-icon")) {
      //Obter a li pai do elemento clicado
      const item = e.target.closest("li");
      const { id } = item.dataset;

      if (id) {
        const isConfirm = confirm("tem certeza que deseja cancelar?");

        if (isConfirm) {
        }
      }
    }
  });
});
