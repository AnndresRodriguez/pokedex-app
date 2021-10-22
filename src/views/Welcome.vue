<template>
  <section class="container-welcome">
    <div>
      <div class="container-image-pokemon animate__animated animate__fadeInDown">
        <img
          alt="img-pikachu"
          src="@/assets/img/pokemon.png"
          class="image-pokemon"
        />
      </div>
    </div>

    <main class="container-text animate__animated animate__fadeInUp">
      <div class="container-text__title">
        <h1 class="title title-desktop">Welcome to Pokédex</h1>
      </div>
      <div class="container-text__description">
        <p class="text text-center">
          The digital encyclopedia created by Profesor Oak is an invaluable tool
          to Trainers in the Pokémon world
        </p>
      </div>
    </main>

    <div class="container-button animate__animated animate__fadeInUp animate__delay-2s">
        <button type="button" class="button button-primary bkg-primary" @click="goToPokedex">Get started</button>
    </div>
  </section>
</template>

<script>

import { mapGetters } from "vuex";
export default {
  name: "Welcome",
  created() {
    this.loadAllPokemons();
  },
  methods: {
    async loadAllPokemons() {
      await this.$store.dispatch("loadPokemons");
    },
    goToPokedex(){
      this.$router.push('pokedex');
    }
  },

  computed: {
    ...mapGetters(["getAllPokemons"]),
  },
};
</script>
