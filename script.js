const modal = document.getElementById('modalInicio');
const cerrar = document.getElementById('modalCerrar');
const mainContainer = document.getElementById('mainContainer');
const despedida = document.getElementById('despedida');
const btnVolver = document.getElementById('btnVolver');

// Secciones a mostrar según el botón clickeado
const secciones = {
  0: document.getElementById('donar'),
  1: document.getElementById('tzedek'),
  2: document.getElementById('solicitarMed'),
};

// Abrir el modal automáticamente al cargar la página
window.onload = (e) => {
  modal.style.display = 'flex';
  mainContainer.style.display = 'none';
  despedida.style.display = 'none';
};

// Volver al inicio al clickear 
  btnVolver.addEventListener('click',() => {
      mainContainer.style.display = 'none';
      modal.style.display = 'flex'
    });
// Cerrar modal con la X y mostrar mensaje de despedida
cerrar.addEventListener('click',() => {
  modal.style.display = 'none';
  mainContainer.style.display = 'none';
  despedida.style.display = 'block';
  });

// Manejar clics en los botones del modal
document.querySelectorAll('.opcion').forEach((boton) => {
  boton.addEventListener('click', () => {
    const seccionId = boton.getAttribute('data-section');
    console.log("Se hizo clic en la sección:", seccionId);
    
    // Oculta el modal y muestra el contenedor principal
    modal.style.display = 'none';
    mainContainer.style.display = 'block';
    despedida.style.display = 'none';

    // Oculta todas las secciones
    Object.values(secciones).forEach((seccion) => {
      seccion.style.display = 'none';
    });
    // Muestra la sección seleccionada
    if (secciones[seccionId]) {
      secciones[seccionId].style.display = 'block';
    }
  });
});
