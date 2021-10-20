import Vue from "vue";
import Vuex from "vuex";
import axios from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemons: [],
    pokemonsFavorites: [],
    nameToFind: "",
    sectionFavorites: false,
  },
  getters: {
    getAllPokemons: (state) => {
      return state.pokemons;
    },
    getFavoritePokemons: (state) => {
      return state.pokemonsFavorites;
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
  },
  mutations: {
    SET_POKEMONS: (state, payload) => {
      state.pokemons = payload;
    },
    SET_POKEMON_FAVORITES: (state) => {
      state.pokemons = [];
      state.pokemons = Array.from(state.pokemonsFavorites);
    },
    SET_SEARCH: (state, payload) => {
      state.nameToFind = payload;
    },
    INSERT_POKEMON: (state, payload) => {
      state.pokemonsFavorites.push(payload);
    },
    REMOVE_POKEMON: (state, payload) => {
      state.pokemonsFavorites = state.pokemonsFavorites.filter((pokemon) => {
        if (pokemon.name != payload) {
          return pokemon;
        }
      });
      if (state.sectionFavorites) {
        state.pokemons = Array.from(state.pokemonsFavorites);
      }
    },
    SET_SECTION_FAVORITES: (state, payload) => {
      state.sectionFavorites = payload;
    },
  },
  actions: {
    loadPokemons: async ({ commit }) => {
      axios.get("pokemon").then((response) => {
        const pokemons = response.data.results;
        commit("SET_POKEMONS", pokemons);
      });
    },
    loadFavorites: async ({ commit }) => {
      commit("SET_POKEMON_FAVORITES");
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
  },
});
