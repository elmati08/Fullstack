function crear-cuadro-dialogo() {
    var dialog = document.createElement("div");
    dialog.class-list.add("dialog");
  
    var pregunta = document.createElement("p");
    pregunta.textContent = "¿Qué te pareció nuestra página?";
  
    var botonBuenisima = document.createElement("button");
    botonBuenisima.textContent = "Buenísima";
    botonBuenisima.addEventListener("click", function() {
      alert("¡Gracias por tu opinión!");
      dialog.remove();
    });
  
    var botonMalisima = document.createElement("button");
    botonMalisima.textContent = "Malísima";
    botonMalisima.addEventListener("click", function() {
      alert("¡Esperamos mejorar en el futuro!");
      dialog.remove();
    });
  
    dialog.appendChild(pregunta);
    dialog.appendChild(botonBuenisima);
    dialog.appendChild(botonMalisima);
  
    document.body.appendChild(dialog);
  }
  
    window.addEventListener("DOMContentLoaded", function() {
    crearCuadroDialogo();
  });
  