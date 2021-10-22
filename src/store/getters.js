export const getters = {
  getAllPokemons: (state) => {
    return state.pokemons;
  },
  getFavoritePokemons: (state) => {
    return state.pokemonsFavorites;
  },
  getCurrentPokemons: (state) => {
    return state.currentPokemons;
  },
  getSectionFavorites: (state) => {
    return state.sectionFavorites;
  },

  getFilteredPokemons: (state) => {
    if (state.nameToFind.length == 0) {
      return state.pokemons;
    } else {
      return state.pokemons.filter((pokemon) => {
        return pokemon.name.match(state.nameToFind.toLowerCase());
      });
    }
  },
  getDataPokemon: state => {
    return state.dataPokemon;
  },
  getImagePokemon: state => {
    return state.imagePokemon;
  },
  getShowModal: state => {
    return state.showModal;
  },
  getPokemonSelected: state => {
    return state.pokemonSelected;
  }
};
