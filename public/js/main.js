import {fetchPokemon} from './fetchPokemon.js';
import {pokeP} from './fetchPokemon.js';
import {pokeAbilityBtn} from './fetchPokemon.js';
import {fetchPokemonAbilities} from './fetchAbility.js';

/**
  * The div containing pokeP
  * @type {Object}
  */
const pokeDiv = document.getElementById('pokemon-info');

window.addEventListener('DOMContentLoaded', () => {
  /**
   * Add an event listener to the pokemon button
   *
   */
  const invoquePokemon = () => {
    const pokeBtn = document.getElementById('pokemon');
    pokeBtn.addEventListener('click', fetchPokemon);
    pokeDiv.appendChild(pokeP);
  };

  /**
   * Add an event listener to the battle ability button
   *
   */
  const pokemonAbility = () => {
    pokeAbilityBtn.addEventListener('click', fetchPokemonAbilities);
    pokeDiv.appendChild(pokeAbility);
  };

  (function startAll() {
    invoquePokemon();
    pokemonAbility();
  })();
});
