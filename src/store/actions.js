import axios from "../api";

export const actions = {
  loadPokemons: async ({ commit }) => {
    axios.get("pokemon").then((response) => {
      const pokemons = response.data.results;
      pokemons.map((pokemon) => (pokemon.favorite = false));
      commit("SET_POKEMONS", pokemons);
    });
  },

  loadDataPokemon: async ({ commit }, payload) => {
    axios.get(`pokemon/${payload}`).then((response) => {
      const dataPokemon = response.data;
      commit('SET_DATA_POKEMON', dataPokemon)
      
    });
  },
  loadFavorites: async ({ commit }) => {
    commit("SET_POKEMON_FAVORITES");
  },
  loadCurrentPokemons: async ({ commit }) => {
    commit("SET_CURRENT_POKEMONS");
  },
  insertPokemon: ({ commit }, payload) => {
    commit("INSERT_POKEMON", payload);
  },
  removePokemon: ({ commit }, payload) => {
    commit("REMOVE_POKEMON", payload);
  },
  setSectionFavorites: ({ commit }, payload) => {
    commit("SET_SECTION_FAVORITES", payload);
  },
};
