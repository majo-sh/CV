// Función para establecer el idioma
function setLanguage(lang) {
    document.body.classList.remove('es', 'en');
    document.body.classList.add(lang);
  

    document.querySelectorAll('.language-switcher button').forEach(button => {
      button.classList.remove('active');
    });
  
   
    if (lang === 'es') {
      document.getElementById('es-btn').classList.add('active');
    } else {
      document.getElementById('en-btn').classList.add('active');
    }
  }
  
 
  document.getElementById('es-btn').addEventListener('click', function() {
    setLanguage('es');
  });
  
  document.getElementById('en-btn').addEventListener('click', function() {
    setLanguage('en');
  });
  
 
  window.addEventListener('DOMContentLoaded', (event) => {
    setLanguage('es'); 
  });
  
  document.getElementById('download-btn').addEventListener('click', function() {
    // Selecciona el contenido que quieres convertir a PDF
    const cvContainer = document.querySelector('.cv-container');
    
    // Configuraciones de html2pdf
    const options = {
      margin: 1,
      filename: 'HojaDeVida_BrahiamMateoGuerrero.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
  
    // Generar el PDF
    html2pdf().from(cvContainer).set(options).save();
  });
  