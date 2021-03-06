/**
 * A place where the options chosen appears
 * @type {Object}
 */
export const pokeP = document.getElementById('pokeInfo');

/**
  * A button to chose the ability of the Pokemon
  * @type {Object}
  */
export const pokeAbilityBtn = document.getElementById('ability');

/**
 * An asynchrone function to fetch the Pokemon's name
 *
 * @async
 * @function fetchPokemon
 * @param {Number} pokedexNum - A random number generator for Pokemon to fetch
 * @param {String} foundPokemon - A variable to catch the response
 * @param {String} jsonPokemon - An object that contains the Pokemon info from the response
 * @param {Object} pokeInfo - An object that contains the Pokemon's name to display
 * @return {Promise} The data from URL
 */
export const fetchPokemon = async () => {
  const pokedexNum = Math.floor(Math.random() * 897);
  let foundPokemon = '';
  let jsonPokemon = '';
  const pokeInfo = {};

  try {
    foundPokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokedexNum}`,
        {method: 'GET', headers: {'Content-Type': 'application/json'}},
    );
  } catch (error) {
    console.error(error.message);
  }

  if (foundPokemon) {
    try {
      jsonPokemon = await foundPokemon.json();
      pokeInfo.name = `${String(jsonPokemon.species.name)
          .slice(0, 1)
          .toUpperCase()}
         ${String(jsonPokemon.species.name)
      .slice(1, jsonPokemon.species.name.length)
      .toLowerCase()}`;
    } catch (error) {
      console.error(error.message);
    }
  } else {
    jsonPokemon = 'No Pokémon found...';
  }

  if (pokeP.innerText !== '') {
    pokeP.innerText = '';
  }
  pokeP.innerText = `Your Pokémon is ${pokeInfo.name}.`;
  pokeAbilityBtn.removeAttribute('disabled');
};
