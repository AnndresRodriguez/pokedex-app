<template>
  <div>
    {{ this.$store.state.nameToFind }}
    <div class="left-inner-addon input-container">
      <div>
        <i class="fa fa-search fa-2x search-icon" aria-hidden="true"></i>
      </div>
      <input
        type="text"
        class="form-control"
        placeholder="Search"
        v-model="name"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "search",
  computed: {
    name: {
      get() {
        return this.$store.state.nameToFind;
      },
      set(value) {
        this.$store.commit("SET_SEARCH", value);
      },
    },
  },
};
</script>
