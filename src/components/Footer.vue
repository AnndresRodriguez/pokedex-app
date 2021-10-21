<template>
  <footer>
    <div class="container-footer-buttons">
      <button
        @click="getPokemons(button.text, index)"
        type="button"
        class="button-desktop-footer m-3"
        :class="[button.active ? 'bkg-primary' : 'bkg-secondary']"
        v-for="(button, index) in buttons"
        :key="index"
      >
        <i
          class="fa  custom-font-icon me-4"
          :class="[button.icon]"
          aria-hidden="true"
        ></i>
        {{ button.text }}
      </button>
    </div>
  </footer>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Footer",
  data() {
    return {
      buttons: [
        {
          id: 0,
          text: "All",
          icon: "fa-th-list",
          active: true,
        },
        {
          id: 1,
          text: "Favorites",
          icon: "fa-star",
          active: false,
        },
      ],
    };
  },
  methods: {
    getPokemons(requestType, index) {
      this.setActiveButton(index);
      requestType == "All" ? this.loadPokemons() : this.loadFavorites();
    },

    setActiveButton(index) {
      this.buttons.map((button) => {
        if (button.id == index) {
          button.active = true;
        } else {
          button.active = false;
        }
      });
    },

    loadPokemons() {
      if(this.getCurrentPokemons.length > 0){
        this.$store.dispatch("loadCurrentPokemons");
        this.$store.dispatch("setSectionFavorites", false);
      }

    },
    loadFavorites() {
      this.$store.dispatch("loadFavorites");
      this.$store.dispatch("setSectionFavorites", true);
    },
  },
  computed: {
    ...mapGetters(["getFavoritePokemons", "getCurrentPokemons"]),
  },
};
</script>
