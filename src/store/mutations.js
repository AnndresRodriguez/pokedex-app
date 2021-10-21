import { addFavorite, removeFavorite, removePokemon } from "./common";

export const mutations = {
  SET_POKEMONS: (state, payload) => {
    state.pokemons = payload;
  },
  SET_CURRENT_POKEMONS: (state) => {
    state.pokemons = state.currentPokemons;
  },

  SET_POKEMON_FAVORITES: (state) => {
    state.currentPokemons = state.pokemons;
    state.pokemons = [];
    state.pokemons = Array.from(state.pokemonsFavorites);
  },
  SET_SEARCH: (state, payload) => {
    state.nameToFind = payload;
  },
  INSERT_POKEMON: (state, payload) => {
    addFavorite(state, payload);
    state.pokemonsFavorites.push(payload);
  },
  REMOVE_POKEMON: (state, payload) => {
    removeFavorite(state, payload);
    removePokemon(state, payload);

    if (state.sectionFavorites) {
      state.pokemons = Array.from(state.pokemonsFavorites);
    }
  },
  SET_SECTION_FAVORITES: (state, payload) => {
    state.sectionFavorites = payload;
  },
  SET_DATA_POKEMON: (state, payload) => {
    state.dataPokemon = payload;
    state.imagePokemon =
      payload.sprites.other["official-artwork"].front_default;
  },
};
