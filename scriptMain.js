document.addEventListener('DOMContentLoaded', function() {
    const searchGoogleButton = document.getElementById('searchGoogle');
    const searchLuckyButton = document.getElementById('searchLucky');

    searchGoogleButton.addEventListener('click', function() {
        const searchTerm = document.getElementById('searchInput').value;
        // Realizar búsqueda en Google con el término ingresado
        if (searchTerm.trim() !== '') {
            if (searchTerm.trim().toLowerCase() === 'el amor de mi vida') {
                // Si el término de búsqueda es "el amor de mi vida", dirigir a una página local
                window.location.href = 'ERROR.html';
            } else {
                window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(searchTerm);
            }
        }
    });

    searchLuckyButton.addEventListener('click', function() {
        // Redirigir a la página de búsqueda al presionar "Voy a tener suerte"
        window.location.href = 'Busqueda.html';
    });
});