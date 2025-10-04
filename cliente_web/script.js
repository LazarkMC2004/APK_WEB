document.getElementById("duelistaForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;
  let deck = document.getElementById("deck").value;
  let nivel = document.getElementById("nivel").value;

  if (!nombre || !correo || !deck || !nivel) {
    alert("Por favor, completa todos los campos del formulario.");
    return;
  }

  let lista = document.getElementById("listaDuelistas");
  let nuevo = document.createElement("li");

  nuevo.textContent = `🧙‍♂️ ${nombre} - ${deck} - Nivel: ${nivel} (${correo})`;
  lista.appendChild(nuevo);

  document.getElementById("duelistaForm").reset();
});
