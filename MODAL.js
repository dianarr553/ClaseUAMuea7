// Obtener el modal
var modal = document.getElementById("modal");

// Obtener el botón que abre el modal
var btn = document.getElementById("openModal");

// Obtener el <span> que cierra el modal
var span = document.getElementById("closeModal");

// Cuando el usuario hace clic en el botón, se abre el modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), se cierra el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal, también se cierra
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}