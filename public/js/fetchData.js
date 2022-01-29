window.addEventListener('DOMContentLoaded', ()=>{
  /**
   * A place where the options chosen appears
   * @type {Object}
   */
  const pokeP=document.getElementById('pokeInfo');
  /**
   * The div containing pokeP
   * @type {Object}
   */
  const pokeDiv=document.getElementById('pokemon-info');
  /**
   * A button to chose the ability of the Pokemon
   * @type {Object}
   */
  const pokeAbilityBtn=document.getElementById('ability');
  /**
   * An asynchrone function to fetch the Pokemon's name
   *
   */
  const fetchPokemon=async ()=>{
    /**
     * A random number generator to choose witch Pokemon to fetch
     * @type {Number}
     */
    const pokedexNum=Math.floor(Math.random() * 897);
    /**
     * A variable to catch the response
     * @type {Objet}
     */
    let foundPokemon='';
    /**
     * An object that contains the Pokemon info from the response
     * @type {Object}
     */
    let jsonPokemon='';
    /**
     * An object that contains the Pokemon's name to display
     * @type {Object}
     * */
    const pokeInfo={};

    try {
      foundPokemon=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokedexNum}`, {method: 'GET', headers: {'Content-Type': 'application/json'}});
    } catch (error) {
      console.error(error.message);
    }

    if (foundPokemon) {
      try {
        jsonPokemon=await foundPokemon.json();
        pokeInfo.name=
        `${String(jsonPokemon.species.name).slice(0, 1).toUpperCase()}
        ${String(jsonPokemon.species.name)
      .slice(1, jsonPokemon.species.name.length)
      .toLowerCase()}`;
      } catch (error) {
        console.error(error.message);
      }
    } else {
      jsonPokemon='No Pokémon found...';
    }

    if (pokeP.innerText !== '') {
      pokeP.innerText='';
    }
    pokeP.innerText=`Your Pokémon is ${pokeInfo.name}.`;
    pokeAbilityBtn.removeAttribute('disabled');
  };

  /**
   * An asynchrone function to fetch the Pokemon's ability
   *
   */
  const fetchPokemonAbilities=async ()=>{
    /**
     * A random number generator to choose witch Pokemon's ability to fetch
     * @type {Number}
     */
    const pokedexNum=Math.floor(Math.random() * 266);
    /**
     * A variable to catch the response
     * @type {Objet}
     */
    let foundAbilities='';
    /**
     * The paragraph where the ability is displayed
     * @type {Object}
     */
    const pokeAbility=document.getElementById('pokeAbility');
    /**
     * An object that contains the ability's info from the response
     * @type {Object}
     */
    let jsonAbilities={};
    /**
     * An object that contains the ability's name to display
     * @type {Object}
     * */
    let abilityToDisplay='';
    try {
      foundAbilities=await fetch(`https://pokeapi.co/api/v2/ability/${pokedexNum}`, {method: 'GET', headers: {'Content-Type': 'application/json'}});
    } catch (error) {
      console.error(error.message);
    }

    if (foundAbilities) {
      try {
        jsonAbilities=await foundAbilities.json();
        if ('' !== jsonAbilities.name && undefined !== jsonAbilities.name) {
          abilityToDisplay=
          `${String(jsonAbilities.name)
              .slice(0, 1)
              .toUpperCase()}
          ${String(jsonAbilities.name)
      .slice(1, jsonAbilities.name.length)
      .toLowerCase()}`;
        } else {
          abilityToDisplay='Tackle';
        }
      } catch (error) {
        console.error(error.message);
      }
    } else {
      jsonAbilities='No ability found...';
    }

    if (pokeAbility.innerText !== '') {
      pokeAbility.innerText='';
    }

    pokeAbility.innerText=`It now knows the move ${abilityToDisplay}!`;
  };

  /**
   * Add an event listener to the pokemon button
   *
   */
  const invoquePokemon=()=>{
    const pokeBtn=document.getElementById('pokemon');
    pokeBtn.addEventListener('click', fetchPokemon);
    pokeDiv.appendChild(pokeP);
  };

  /**
   * Add an event listener to the battle ability button
   *
   */
  const pokemonAbility=()=>{
    pokeAbilityBtn.addEventListener('click', fetchPokemonAbilities);
    pokeDiv.appendChild(pokeAbility);
  };

  (function startAll() {
    invoquePokemon();
    pokemonAbility();
  })();
});
