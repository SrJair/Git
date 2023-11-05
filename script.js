// script.js
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('generateButton').addEventListener('click', function() {
    const categoria = document.getElementById('categoria').value;
    const randomLink = getRandomLink(categoria);

    if (randomLink) {
      // Abre una nueva pestaña con el enlace aleatorio
      window.open(randomLink, '_blank');
    }
  });

  function getRandomLink(categoria) {
    // Define los enlaces asociados a cada categoría
    const enlacesPorCategoria = {
      'crunchyroll': ['https://cuty.io/GhxknGpKGJ1', 'https://cuty.io/stfP', 'https://cuty.io/xaX7RR', 'https://cutsy.net/e9sldGdR9'],
      'ipvanish': ['https://cuty.io/Cgsc4GA9qsYk', 'https://cuty.io/0CcCfZOlTtbJ', 'https://cuty.io/Jezjp'],
      'starplus': ['https://cuty.io/DQwwQlQ7hsd7', 'https://cuty.io/0uRHQblVFyXH'],
      'tester': ['starplus/1.html', 'disneyplus/1.html'],
      // Agrega más enlaces para otras categorías según tus necesidades
    };

    // Obtiene los enlaces para la categoría seleccionada
    const enlaces = enlacesPorCategoria[categoria];

    if (enlaces && enlaces.length > 0) {
      // Elige un enlace aleatorio de la categoría
      const randomIndex = Math.floor(Math.random() * enlaces.length);
      return enlaces[randomIndex];
    }

    return null;
  }
});
