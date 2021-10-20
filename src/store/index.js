import Vue from "vue";
import Vuex from "vuex";
import axios from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemons: [],
    nameToFind: "",
  },
  getters: {
    getAllPokemons: (state) => {
      return state.pokemons;
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
    SET_SEARCH: (state, payload) => {
      state.nameToFind = payload;
    },
  },
  actions: {
    loadPokemons: async (state) => {
      axios.get("pokemon").then((response) => {
        const pokemons = response.data.results;
        state.commit("SET_POKEMONS", pokemons);
      });
    },
  },
});
