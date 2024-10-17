// Función para actualizar la interfaz en función del idioma seleccionado
function updateActiveLanguageButton(lang) {
  document.querySelectorAll('.language-switcher button').forEach(button => {
    button.classList.remove('active');
  });

  document.getElementById(`${lang}-btn`).classList.add('active');
}

// Función para establecer el idioma
function setLanguage(lang) {
  document.body.classList.remove('es', 'en');
  document.body.classList.add(lang);
  updateActiveLanguageButton(lang);
}

// Función para manejar la descarga del PDF
function downloadPDF() {
  const cvContainer = document.querySelector('.cv-container');
  const downloadBtn = document.getElementById('download-btn');
  const iframe = document.querySelector('iframe'); // Asegúrate de seleccionar el iframe
  const pdfLink = document.getElementById('pdf-link'); // Asegúrate de seleccionar el enlace al PDF

  // Ocultar el botón y iframe (si existen) mientras se genera el PDF
  downloadBtn.style.display = 'none';
  if (iframe) iframe.style.display = 'none';
  if (pdfLink) pdfLink.style.display = 'block';

  const options = {
    margin: 1,
    filename: 'HojaDeVida_BrahiamMateoGuerrero.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, windowWidth: document.body.scrollWidth },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    pagebreak: { mode: ['avoid-all'] }
  };

  // Generar y descargar el PDF, luego mostrar nuevamente los elementos ocultos
  html2pdf().from(cvContainer).set(options).save().then(() => {
    downloadBtn.style.display = 'block';
    if (iframe) iframe.style.display = 'block';
    if (pdfLink) pdfLink.style.display = 'none';
  });
}

// Función para inicializar los eventos de la página
function initializeEvents() {
  document.getElementById('es-btn').addEventListener('click', () => setLanguage('es'));
  document.getElementById('en-btn').addEventListener('click', () => setLanguage('en'));
  document.getElementById('download-btn').addEventListener('click', downloadPDF);
  
  // Establecer idioma predeterminado al cargar la página
  window.addEventListener('DOMContentLoaded', () => setLanguage('es'));
}

// Inicializar la página
initializeEvents();
