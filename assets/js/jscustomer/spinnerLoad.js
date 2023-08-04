window.onload = function() {
// Mostrar la pantalla de carga
const loader = document.getElementById('loader');
loader.style.display = 'flex';

// Simular un retraso de 1.5 segundos
setTimeout(function() {
  // Ocultar la pantalla de carga y mostrar el contenido de la página
  loader.style.display = 'none';
  document.getElementById('page-content').style.display = 'block';
}, 3000);
};
