const formulario = document.getElementById('searchForm');
  const entrada = document.getElementById('pokemonInput');
  const infoPokemon = document.getElementById('pokemonInfo');

  formulario.addEventListener('submit', async function(evento) {
    evento.preventDefault();
    const nombrePokemon = entrada.value.toLowerCase().trim();

    try {
      const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);
      if (!respuesta.ok) {
        throw new Error('¡Pokémon no encontrado!');
      }
      const datos = await respuesta.json();
      mostrarInfoPokemon(datos);
    } catch (error) {
      infoPokemon.innerHTML = `<div class="col-md-6 text-center"><p class="text-danger">${error.message}</p></div>`;
    }
  });

  function mostrarInfoPokemon(datos) {
    const pokemon = `
      <div class="col-md-6 text-center">
        <img src="${datos.sprites.front_default}" alt="${datos.name}" class="img-fluid mb-3">
        <h2>${datos.name}</h2>
        <p><strong>Altura:</strong> ${datos.height / 10} m</p>
        <p><strong>Peso:</strong> ${datos.weight / 10} kg</p>
        <p><strong>Habilidades:</strong> ${datos.abilities.map(habilidad => habilidad.ability.name).join(', ')}</p>
      </div>
    `;
    infoPokemon.innerHTML = pokemon;
  }