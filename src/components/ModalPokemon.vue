<template>
  <VueModal v-model="showModal" wrapper-class="modal-wrapper">
    <div class="container-image-modal-pokemon">
      <img
        :src="imagePokemon"
        :alt="pokemonData.name"
        width="200"
        class="image-modal-pokemon animate__animated animate__fadeIn"
      />
    </div>

    <div class="container-info-pokemon">
      <div class="container-info container-info__name animate__animated animate__fadeInUp animate__delay-2s">
        <p class="mb-0">
          <span class="container-info-description">Name:</span>
          {{ pokemonData.name }}
        </p>
      </div>
      <div class="container-info container-info__weight animate__animated animate__fadeInUp animate__delay-3s">
        <p class="mb-0">
          <span class="container-info-description">Weight:</span>
          {{ pokemonData.weight }}
        </p>
      </div>
      <div class="container-info container-info__height animate__animated animate__fadeInUp animate__delay-4s">
        <p class="mb-0">
          <span class="container-info-description">Height:</span>
          {{ pokemonData.height }}
        </p>
      </div>
      <div class="container-info container-info__types animate__animated animate__fadeInUp animate__delay-4s">
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

    <div class="container-button-share animate__animated animate__fadeInUp animate__delay-5s">
      <button class="button button-share bkg-primary" @click="copyDataPokemon">
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
</template>
<script>
import VueModal from "@kouts/vue-modal";
import "@kouts/vue-modal/dist/vue-modal.css";
import PokemonMixin from "../mixins/pokemon-mixin";
import { mapGetters } from "vuex";
export default {
  mixins: [PokemonMixin],
  components: {
    VueModal,
  },
  data() {
    return {
      selected: false,
    };
  },

  methods: {
    async copyDataPokemon() {
      await navigator.clipboard.writeText(this.createDataToClipboard());
      this.$toast.success("Pokemon data copied");
    },
    createDataToClipboard() {
      let information = `Name Pokemon: ${this.pokemonData.name}, Weight: ${this.pokemonData.weight}, Height: ${this.pokemonData.height} Types:`;
      this.pokemonData.types.map((data) => {
        information += `${data.type.name},`;
      });
      return information;
    },
  },

  computed: {
    ...mapGetters({
      pokemonData: "getDataPokemon",
      imagePokemon: "getImagePokemon",
      pokemon: "getPokemonSelected"
    }),
    showModal: {
      get() {
        return this.$store.state.showModal;
      },
      set(value) {
        this.$store.commit("SET_SHOW_MODAL", value);
      },
    },
  },
};
</script>
