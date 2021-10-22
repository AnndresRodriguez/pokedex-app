<template>
  <div>
    <div class="item-pokemon mt-4 animate__animated animate__fadeInUp">
      <div class="item-pokemon__name" @click="getDataPokemon(pokemon)">
        <p class="item-pokemon__text mb-0 text-left">{{ pokemon.name }}</p>
      </div>

      <div class="item-pokemon__favorite">
        <i
          class="fa fa-star fa-2x favorite-icon"
          :class="{ ' favorite-icon-selected': pokemon.favorite }"
          aria-hidden="true"
          @click="selectFavorite(pokemon)"
        ></i>
      </div>
    </div>
  </div>
</template>
<script>

import PokemonMixin from "../mixins/pokemon-mixin";

export default {
  name: "itempokemon",
  mixins: [PokemonMixin],
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },

  methods: {
    async getDataPokemon(pokemon) {
      await this.$store.dispatch("loadDataPokemon", pokemon.name);
      await this.$store.dispatch("setSelectedPokemon", pokemon);
    },
  },
};
</script>
