<template>
  <div class="item-pokemon mt-4">
    <div class="item-pokemon__name">
      <p class="item-pokemon__text mb-0">{{ pokemon.name }}</p>
    </div>
    <div class="item-pokemon__favorite">
      <i
        class="fa fa-star fa-2x favorite-icon"
        :class="{ ' favorite-icon-selected': isSelected || isSectionFavorite }"
        aria-hidden="true"
        @click="selectFavorite(pokemon)"
      ></i>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: "itempokemon",
  data() {
    return {
      isSelected: false,
      
    };
  },
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },

  methods: {
    selectFavorite(pokemon) {
      this.isSelected = !this.isSelected
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

  computed:{
    ...mapGetters({
        isSectionFavorite: 'getSectionFavorites'
      })

  }
};
</script>
