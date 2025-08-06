document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('open-pdf-btn');
  
  button.addEventListener('click', () => {
    const pdfUrl = 'https://drive.google.com/file/d/1TuEK0iyRcHU5bNoILqUhga837ucRO6GK/preview';
    window.open(pdfUrl, '_blank');
  });
});
