<template>
  <div>
    <div class="item-pokemon mt-4">
      <div class="item-pokemon__name" @click="getDataPokemon(pokemon.name)">
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

    <VueModal v-model="showModal" wrapper-class="modal-wrapper">
      <div class="container-image-modal-pokemon">
        <img
          :src="imagePokemon"
          :alt="pokemonData.name"
          width="200"
          class="image-modal-pokemon"
        />
      </div>

      <div class="container-info-pokemon">
        <div class="container-info container-info__name">
          <p class="mb-0">
            <span class="container-info-description">Name:</span>
            {{ pokemonData.name }}
          </p>
        </div>
        <div class="container-info container-info__weight">
          <p class="mb-0">
            <span class="container-info-description">Weight:</span>
            {{ pokemonData.weight }}
          </p>
        </div>
        <div class="container-info container-info__height">
          <p class="mb-0">
            <span class="container-info-description">Height:</span>
            {{ pokemonData.height }}
          </p>
        </div>
        <div class="container-info container-info__types">
          <span class="container-info-description me-2">Types:</span>
          <p
            class="me-1 mb-0"
            v-for="(type, index) in pokemonData.types"
            :key="index"
          >
            {{ type.type.name }}
            <span v-if="index + 1 < pokemonData.types.length">,</span>
          </p>
        </div>
      </div>

      <div class="container-button-share">
        <button
          class="button button-share bkg-primary"
          @click="copyDataPokemon"
        >
          Share to my friends
        </button>
        <div class="item-pokemon__favorite">
          <i
            class="fa fa-star fa-2x favorite-icon"
            :class="{ ' favorite-icon-selected': pokemon.favorite }"
            aria-hidden="true"
            @click="selectFavorite(pokemon)"
          ></i>
        </div>
      </div>
    </VueModal>
  </div>
</template>
<script>
import VueModal from "@kouts/vue-modal";
import "@kouts/vue-modal/dist/vue-modal.css";
import { mapGetters } from "vuex";
export default {
  name: "itempokemon",
  data() {
    return {
      showModal: false,
      name: "",
    };
  },
  components: {
    VueModal,
  },
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },

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

    async getDataPokemon(name) {
      await this.$store.dispatch("loadDataPokemon", name);
      this.name = name;
      this.showModal = true;
    },

    existsPokemon(name) {
      let currentFavorites = this.$store.getters.getFavoritePokemons;
      return (
        currentFavorites.length > 0 &&
        currentFavorites.some((pokemon) => pokemon.name == name)
      );
    },

    async copyDataPokemon() {
      await navigator.clipboard.writeText(this.createDataToClipboard());
      this.$toast.success("Pokemon data copied");
    },


    createDataToClipboard(){

      let information = `Name Pokemon: ${ this.pokemonData.name }, Weight: ${ this.pokemonData.weight }, Height: ${ this.pokemonData.height } Types:`
      this.pokemonData.types.map( data => {
        information += `${data.type.name},` ;
      })
      return information;
    }

  },

  computed: {
    ...mapGetters({
      pokemonData: "getDataPokemon",
      imagePokemon: "getImagePokemon",
    }),
  },
};
</script>
