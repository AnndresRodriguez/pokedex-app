import Vue from "vue";
import Vuex from "vuex";
import axios from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemons: [],
    pokemonsFavorites: [],
    currentPokemons: [],
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
      state.pokemons = state.pokemons.map((pokemon) => {
        if (pokemon.name == payload.name) {
          pokemon.favorite = true;
        }
        return pokemon;
      });

      state.pokemonsFavorites.push(payload);
    },
    REMOVE_POKEMON: (state, payload) => {
      state.pokemons = state.pokemons.map((pokemon) => {
        if (pokemon.name == payload) {
          pokemon.favorite = false;
        }
        return pokemon;
      });
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
        pokemons.map((pokemon) => (pokemon.favorite = false));
        commit("SET_POKEMONS", pokemons);
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
  },
});
