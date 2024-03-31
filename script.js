let principal = document.getElementById("imagesContainer");

const album = [
    { src: 'img/foto (1).jpg', description: 'El amanecer de nuestras aventuras.' },
    { src: 'img/foto (65).jpg', description: 'El amanecer de nuestras aventuras.' },
    { src: 'img/foto (2).jpg', description: 'Un rayo de esperanza en medio de la oscuridad.' },
    { src: 'img/foto (3).jpg', description: 'El reflejo de la pureza en un mundo caótico.' },
    { src: 'img/foto (4).jpg', description: 'La melodía de nuestros recuerdos.' },
    { src: 'img/foto (5).jpg', description: 'El lienzo de nuestros sueños compartidos.' },
    { src: 'img/foto (6).jpg', description: 'El eco de nuestras risas eternas.' },
    { src: 'img/foto (7).jpg', description: 'La chispa de nuestra complicidad.' },
    { src: 'img/foto (8).jpg', description: 'El destello de nuestras miradas cómplices.' },
    { src: 'img/foto (9).jpg', description: 'La calidez de nuestros abrazos.' },
    { src: 'img/foto (10).jpg', description: 'El oasis de nuestra complicidad.' },
    { src: 'img/foto (11).jpg', description: 'La explosión de color en nuestras vidas.' },
    { src: 'img/foto (12).jpg', description: 'El misterio de nuestros encuentros nocturnos.' },
    { src: 'img/foto (13).jpg', description: 'El susurro del viento en nuestras confidencias.' },
    { src: 'img/foto (14).jpg', description: 'El baile eterno de nuestras almas.' },
    { src: 'img/foto (15).jpg', description: 'El faro que guía nuestros pasos.' },
    { src: 'img/foto (16).jpg', description: 'La sinfonía de nuestras emociones compartidas.' },
    { src: 'img/foto (17).jpg', description: 'El tesoro de nuestros momentos simples.' },
    { src: 'img/foto (18).jpg', description: 'El destello de nuestra complicidad.' },
    { src: 'img/foto (19).jpg', description: 'El refugio de nuestros secretos.' },
    { src: 'img/foto (20).jpg', description: 'La brújula de nuestros viajes.' },
    { src: 'img/foto (21).jpg', description: 'El puente hacia nuestros sueños.' },
    { src: 'img/foto (22).jpg', description: 'La magia de nuestros encuentros fortuitos.' },
    { src: 'img/foto (23).jpg', description: 'El eco de nuestras promesas.' },
    { src: 'img/foto (24).jpg', description: 'La frescura de nuestros primeros momentos.' },
    { src: 'img/foto (25).jpg', description: 'La explosión de nuestros corazones.' },
    { src: 'img/foto (26).jpg', description: 'El eco de nuestras risas.' },
    { src: 'img/foto (27).jpg', description: 'La armonía de nuestras diferencias.' },
    { src: 'img/foto (28).jpg', description: 'La estrella que ilumina nuestros caminos.' },
    { src: 'img/foto (29).jpg', description: 'El brillo en nuestros ojos.' },
    { src: 'img/foto (30).jpg', description: 'El abrazo que nos reconforta.' },
    { src: 'img/foto (31).jpg', description: 'El eco de nuestras aventuras.' },
    { src: 'img/foto (32).jpg', description: 'El susurro de nuestros secretos.' },
    { src: 'img/foto (33).jpg', description: 'La melodía de nuestros recuerdos.' },
    { src: 'img/foto (34).jpg', description: 'El reflejo de nuestra complicidad.' },
    { src: 'img/foto (35).jpg', description: 'El brillo de nuestras sonrisas.' },
    { src: 'img/foto (36).jpg', description: 'El latido de nuestros corazones.' },
    { src: 'img/foto (37).jpg', description: 'La explosión de nuestras emociones.' },
    { src: 'img/foto (38).jpg', description: 'El refugio de nuestros momentos íntimos.' },
    { src: 'img/foto (39).jpg', description: 'El eco de nuestras conversaciones.' },
    { src: 'img/foto (40).jpg', description: 'El arco iris después de la tormenta.' },
    { src: 'img/foto (41).jpg', description: 'La melodía de nuestros días.' },
    { src: 'img/foto (42).jpg', description: 'La aurora de nuestros sueños.' },
    { src: 'img/foto (43).jpg', description: 'El murmullo de nuestros secretos compartidos.' },
    { src: 'img/foto (44).jpg', description: 'La melodía de nuestros momentos.' },
    { src: 'img/foto (45).jpg', description: 'El faro en la noche oscura.' },
    { src: 'img/foto (46).jpg', description: 'La chispa en nuestra historia.' },
    { src: 'img/foto (47).jpg', description: 'La melodía de nuestras sonrisas.' },
    { src: 'img/foto (48).jpg', description: 'El sueño de nuestras vidas.' },
    { src: 'img/foto (49).jpg', description: 'El lienzo de nuestra historia.' },
    { src: 'img/foto (50).jpg', description: 'La promesa de nuestro futuro.' },
    { src: 'img/foto (51).jpg', description: 'La esencia de nuestra pasión.' },
    { src: 'img/foto (52).jpg', description: 'El calor de nuestros encuentros.' },
    { src: 'img/foto (53).jpg', description: 'El destello en nuestras miradas.' },
    { src: 'img/foto (54).jpg', description: 'La melodía de nuestras almas.' },
    { src: 'img/foto (55).jpg', description: 'La sombra de nuestros secretos.' },
    { src: 'img/foto (56).jpg', description: 'El susurro en nuestras confidencias.' },
    { src: 'img/foto (57).jpg', description: 'La magia de nuestros momentos.' },
    { src: 'img/foto (58).jpg', description: 'La aurora de nuestros días.' },
    { src: 'img/foto (59).jpg', description: 'El eco de nuestras risas.' },
    { src: 'img/foto (60).jpg', description: 'El refugio de nuestros sueños.' },
    { src: 'img/foto (61).jpg', description: 'El arco iris en nuestros días grises.' },
    { src: 'img/foto (62).jpg', description: 'El resplandor de nuestros encuentros.' },
    { src: 'img/foto (63).jpg', description: 'La melodía de nuestros recuerdos.' },
    { src: 'img/foto (64).jpg', description: 'El brillo en nuestras vidas.' },
    { src: 'img/foto (65).jpg', description: 'La esencia de nuestra historia.' },
    { src: 'img/foto (66).jpg', description: 'El eco de nuestras palabras.' },
    { src: 'img/foto (67).jpg', description: 'El susurro de nuestros corazones.' },
    { src: 'img/foto (68).jpg', description: 'La magia en nuestros momentos.' },
    { src: 'img/foto (69).jpg', description: 'El destello de nuestros sueños.' },
    { src: 'img/foto (70).jpg', description: 'La melodía de nuestra vida.' }
];

if (principal) {
    for (let i = 0; i < album.length; i++) {
        let creaDiv = document.createElement('div');
        let creaImg = document.createElement('img');
        let creaDesc = document.createElement('p');

        creaDiv.setAttribute('class', 'foto');
        creaImg.setAttribute("src", album[i].src);
        creaDesc.textContent = album[i].description;
        
        creaDiv.appendChild(creaImg);
        creaDiv.appendChild(creaDesc);

        // Agregar la imagen y el div al elemento 'principal'
        principal.appendChild(creaDiv);
        
    }
}
