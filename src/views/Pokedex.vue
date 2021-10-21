<template>
  <div>
      <div class="p-5 mt-2 container-pokedex">
        <Search />
        <template v-if="getFilteredPokemons.length == 0">
          <Empty />
        </template>
        <template v-else>
          <Pokemon
            v-for="(pokemon, index) in getFilteredPokemons"
            :pokemon="pokemon"
            :key="index"
          />
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
import Empty from "../components/EmptyList.vue";

export default {
  name: "Pokedex",
  components: {
    Search,
    Pokemon,
    Footer,
    Empty,
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
    ...mapGetters(["getAllPokemons", "getFilteredPokemons", "getCurrentPokemons"]),
  },
};
</script>
