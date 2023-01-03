
/**
 * @author: LASME Ayou Emeline
 * @description
 */

//Créez un tableau contenant les planètes du système solaire :

const planets = ['Mercure', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'terre'];

//Créez une div pour chaque planète en utilisant la méthode createElement et en lui attribuant la classe planet :

const planetDiv = planets.map((planet) => {
    const div = document.createElement('div');
    div.classList.add('planet');
    return div;
});

//Ajoutez une classe de couleur de fond différente à chaque div de planète :

const planetColors = ['red', 'icelandPoppy', 'vibranyellow', 'energos', 'jadeJust', 'PineGlad', 'honeyGlow', 'doubescreen'];

planetDiv.forEach((div, i) => {
    div.classList.add(planetColors[i]);
});


//Ajoutez chaque div de planète au <section> dans le HTML :

const listPlanets = document.querySelector('.listPlanets');
planetDiv.forEach((div) => {
    listPlanets.appendChild(div);
});
