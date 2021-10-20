<template>
  <footer>
    <div class="container-footer-buttons">
      <button type="button" class="button m-3" :class="[button.active ? 'bkg-primary': 'bkg-secondary']" v-for="(button, index) in buttons" :key="index">
        <i class="fa  custom-font-icon me-4" :class="[button.icon]" aria-hidden="true"></i>
        {{ button.text }}
      </button>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      buttons: [
        {
          text: "All",
          icon: "fa-th-list",
          active: true,
        },
        {
          text: "Favorites",
          icon: "fa-star",
          active: false,
        },
      ],
    };
  },
};
</script>
