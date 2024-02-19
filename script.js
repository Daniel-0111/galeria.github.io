let principal = document.getElementById("imagesContainer");

// Ruta de la carpeta local que deseas explorar


// Número total de imágenes que esperas encontrar
const totalImages = 14;

const animal = [
    { src: 'img/IMG01.jpg', description: 'Eres mi luz.' },
    { src: 'img/IMG1.jpg', description: 'El amor de mi vida' },
    { src: 'img/IMG002.jpg', description: 'Te quiero Mucho <3' },
    { src: 'img/IMG2.jpg', description: 'Te quiero Mucho <3' },
    { src: 'img/IMG02.jpg', description: 'Te quiero Mucho <3' },
    { src: 'img/IMG3.jpg', description: 'Eres mi mundo.' },
    { src: 'img/IMG4.jpg', description: 'Eres mi alegría' },
    { src: 'img/IMG04.jpg', description: 'Te quiero Mucho <3' },
    { src: 'img/IMG5.jpg', description: 'Eres mi razón' },
    { src: 'img/IMG6.jpg', description: 'Eres mi inspiración' },
    { src: 'img/IMG7.jpg', description: 'Eres mi felicidad' },
    { src: 'img/IMG8.jpg', description: 'Eres mi sueño' },
    { src: 'img/IMG9.jpg', description: 'Eres mi paz' },
    { src: 'img/IMG10.jpg', description: 'Eres mi aliento' },
    { src: 'img/IMG010.jpg', description: 'Te quiero Mucho <3' },
    { src: 'img/IMG11.jpg', description: 'Eres estrella' },
    { src: 'img/IMG011.jpg', description: 'Te quiero Mucho <3' },
    { src: 'img/IMG12.jpg', description: 'Eres mi sonrisa' },
    
    { src: 'img/IMG13.jpg', description: 'Eres mi refugio' },
    { src: 'img/IMG14.jpg', description: 'Eres mi sueño hecho realidad' },
    { src: 'img/IMG15.jpg', description: 'Eres mi luz.' },
    { src: 'img/IMG16.jpg', description: 'Te quiero Mucho <3' },
    { src: 'img/IMG17.jpg', description: 'Eres mi mundo.' },
    { src: 'img/IMG017.jpg', description: 'Te quiero Mucho <3' },
    { src: 'img/IMG18.jpg', description: 'Eres mi alegría' },
    { src: 'img/IMG19.jpg', description: 'Eres mi razón' },
    { src: 'img/IMG20.jpg', description: 'Eres mi inspiración' },
    { src: 'img/IMGLOCA.jpg', description: 'Mi loca' },
    { src: 'img/IMG21.jpg', description: 'Eres mi felicidad' },
    { src: 'img/IMG22.jpg', description: 'Eres mi sueño' },
    { src: 'img/IMG000.jpg', description: 'Eres mi sueño' },
    { src: 'img/IMG23.jpg', description: 'Eres mi paz' },
    
    { src: 'img/IMG24.jpg', description: 'Eres mi aliento' },
    { src: 'img/IMG25.jpg', description: 'Eres estrella' },
    { src: 'img/IMG26.jpg', description: 'Eres mi sonrisa' },
    { src: 'img/IMG026.jpg', description: 'Te quiero Mucho <3' },
    { src: 'img/IMG27.jpg', description: 'Eres mi refugio' },
    { src: 'img/IMG28.jpg', description: 'Eres mi sueño hecho realidad' },
    { src: 'img/IMG029.jpg', description: 'Te quiero Mucho <3' },
    { src: 'img/IMG29.jpg', description: 'Eres mi luz.' },
    { src: 'img/IMG30.jpg', description: 'Te quiero Mucho <3' },
    { src: 'img/IMG31.jpg', description: 'Eres mi mundo.' },
    { src: 'img/IMG32.jpg', description: 'Eres mi alegría' },
    { src: 'img/IMG032.jpg', description: 'Te quiero Mucho <3' },
    { src: 'img/IMG33.jpg', description: 'Eres mi razón' },
    { src: 'img/IMG34.jpg', description: 'Eres mi inspiración' },
    { src: 'img/IMG35.jpg', description: 'Eres mi felicidad' },
    { src: 'img/IMG36.jpg', description: 'Eres mi sueño' },
    { src: 'img/IMG37.jpg', description: 'Eres mi paz' },
    { src: 'img/IMG037.jpg', description: 'Eres mi sueño' },
    { src: 'img/IMG39.jpg', description: 'Eres mi sueño' },
    { src: 'img/IMG38.jpg', description: 'Eres mi aliento' },
    { src: 'img/IMG39.jpg', description: 'Eres estrella' },
    { src: 'img/IMG50.jpg', description: 'Eres mi sueño' },
    { src: 'img/IMG40.jpg', description: 'Eres mi sonrisa' },
    { src: 'img/IMG41.jpg', description: 'Eres mi refugio' },
    { src: 'img/IMG42.jpg', description: 'Eres mi sueño hecho realidad' },
    { src: 'img/IMG042.jpg', description: 'Te quiero Mucho <3' },
    { src: 'img/IMG43.jpg', description: 'Eres mi luz.' },
    { src: 'img/IMG44.jpg', description: 'Te quiero Mucho <3' },
    { src: 'img/IMG45.jpg', description: 'Eres mi mundo.' },
    { src: 'img/IMG46.jpg', description: 'Eres mi alegría' },
    { src: 'img/IMG47.jpg', description: 'Eres mi razón' },
    { src: 'img/IMGLOCO.jpg', description: 'Yo' },
    { src: 'img/IMG48.jpg', description: 'Eres mi inspiración' },
    { src: 'img/IMG49.jpg', description: 'Eres mi felicidad' },
    
    { src: 'img/IMG050.jpg', description: 'Eres mi sueño' },
   
];



if (principal) {
    for (let i = 0; i < animal.length; i++) {
        let creaDiv = document.createElement('div');
        let creaImg = document.createElement('img');
        let creaDesc = document.createElement('p');

        creaDiv.setAttribute('class', 'foto');
        creaImg.setAttribute("src", animal[i].src);
        creaDesc.textContent = animal[i].description;
        
        creaDiv.appendChild(creaImg);
        creaDiv.appendChild(creaDesc);

        // Agregar la imagen y el div al elemento 'principal'
        principal.appendChild(creaDiv);
        
    }
}
