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
  