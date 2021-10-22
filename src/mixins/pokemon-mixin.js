export default {
  methods: {
    selectFavorite(pokemon) {
  
      this.validateNewFavorite(pokemon);
    },

    validateNewFavorite(pokemon) {
      this.existsPokemon(pokemon.name)
        ? this.removeFavorite(pokemon.name)
        : this.addFavorite(pokemon);
    },

    addFavorite(pokemon) {
      this.$store.dispatch("insertPokemon", pokemon);
    },

    removeFavorite(namePokemon) {
      this.$store.dispatch("removePokemon", namePokemon);
    },
    existsPokemon(name) {
      let currentFavorites = this.$store.getters.getFavoritePokemons;
      return (
        currentFavorites.length > 0 &&
        currentFavorites.some((pokemon) => pokemon.name == name)
      );
    },
  },
};
