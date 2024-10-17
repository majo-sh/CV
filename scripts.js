document.getElementById('es-btn').addEventListener('click', function() {
    document.body.classList.add('es');
    document.body.classList.remove('en');
  });
  
  document.getElementById('en-btn').addEventListener('click', function() {
    document.body.classList.add('en');
    document.body.classList.remove('es');
  });