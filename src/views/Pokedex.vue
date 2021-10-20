<template>
  <div>
    <div class="container p-5 mt-2">
      <Search />
      <template v-for="(pokemon, index) in getFilteredPokemons">
        <Pokemon :pokemon="pokemon" :key="index" />
      </template>
    </div>
    <Footer />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Search from "../components/Search.vue";
import Pokemon from "../components/ItemPokemon.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Pokedex",
  components: {
    Search,
    Pokemon,
    Footer,
  },
  created() {
    this.loadAllPokemons();
  },
  methods: {
    async loadAllPokemons() {
      await this.$store.dispatch("loadPokemons");
    },
  },
  computed: {
    ...mapGetters(["getAllPokemons", 'getFilteredPokemons']),
  },
};
</script>
