/**
 * An asynchrone function to fetch the Pokemon's ability
 *
 */
export const fetchPokemonAbilities = async () => {
  /**
   * A random number generator to choose witch Pokemon's ability to fetch
   * @type {Number}
   */
  const pokedexNum = Math.floor(Math.random() * 266);
  /**
   * A variable to catch the response
   * @type {Objet}
   */
  let foundAbilities = '';
  /**
   * The paragraph where the ability is displayed
   * @type {Object}
   */
  const pokeAbility = document.getElementById('pokeAbility');
  /**
   * An object that contains the ability's info from the response
   * @type {Object}
   */
  let jsonAbilities = {};
  /**
   * An object that contains the ability's name to display
   * @type {Object}
   * */
  let abilityToDisplay = '';
  try {
    foundAbilities = await fetch(
        `https://pokeapi.co/api/v2/ability/${pokedexNum}`,
        {method: 'GET', headers: {'Content-Type': 'application/json'}},
    );
  } catch (error) {
    console.error(error.message);
  }

  if (foundAbilities) {
    try {
      jsonAbilities = await foundAbilities.json();
      if ('' !== jsonAbilities.name && undefined !== jsonAbilities.name) {
        abilityToDisplay = `${String(jsonAbilities.name)
            .slice(0, 1)
            .toUpperCase()}
          ${String(jsonAbilities.name)
      .slice(1, jsonAbilities.name.length)
      .toLowerCase()}`;
      } else {
        abilityToDisplay = 'Tackle';
      }
    } catch (error) {
      console.error(error.message);
    }
  } else {
    jsonAbilities = 'No ability found...';
  }

  if (pokeAbility.innerText !== '') {
    pokeAbility.innerText = '';
  }

  pokeAbility.innerText = `It now knows the move ${abilityToDisplay}!`;
};
