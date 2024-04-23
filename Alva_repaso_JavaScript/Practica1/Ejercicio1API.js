// Arreglo de objetos con información de los futbolistas
const futbolistas = [
  { nombre: "1- Pedri", equipo: "Barcelona", posicion: "Centrocampista", Pais: "España" },
  { nombre: "2- João Félix", equipo: "Atlético de Madrid", posicion: "Delantero", Pais: "Portugal" },
  { nombre: "3- Giovanni Reyna", equipo: "Borussia Dortmund", posicion: "Centrocampista", Pais: "Estados Unidos" },
  { nombre: "4- Eduardo Camavinga", equipo: "Real Madrid", posicion: "Centrocampista", Pais: "Francia" },
  { nombre: "5- Mason Mount", equipo: "Chelsea", posicion: "Centrocampista", Pais: "Inglaterra" },
  { nombre: "6- Sandro Tonali", equipo: "AC Milan", posicion: "Centrocampista", Pais: "Italia" },
  { nombre: "7 Ansu Fati", equipo: "Barcelona", posicion: "Delantero", Pais: "España" },
  { nombre: "8- Ferran Torres", equipo: "Barcelona", posicion: "Delantero", Pais: "España" },
  { nombre: "9- Alphonso Davies", equipo: "Bayern Múnich", posicion: "Defensa", Pais: "Canadá" },
  { nombre: "10- Gianluigi Donnarumma", equipo: "Paris Saint-Germain", posicion: "Portero", Pais: "Italia" }
];

// Función para mostrar la información de los futbolistas utilizando Map
function mostrarFutbolistas() {
  const futbolistasList = document.getElementById('futbolistas-lista');

  //Map para recorrer el arreglo de futbolistas y mostrar la información
  futbolistas.map(futbolista => {
    const card = document.createElement('div');
    card.classList.add('col-md-12', 'mb-3');

    card.innerHTML = `

        <div class="card-client">
    <div class="user-picture">
        <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
        </svg>
    </div>
    <p class="name-client"> ${futbolista.nombre}
        <span>Equipo: ${futbolista.equipo}
        </span>
        <span>Posición: ${futbolista.posicion}
        </span>
        <span>Pais: ${futbolista.Pais}
        </span>
    </p>
</div>
      `;
    futbolistasList.appendChild(card);
  });
}

// Mostrar los futbolistas cuando la página se cargue
window.onload = mostrarFutbolistas;