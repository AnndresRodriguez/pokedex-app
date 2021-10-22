<template>
  <div>
    <div
      class="left-inner-addon input-container animate__animated animate__fadeInDown"
    >
      <div>
        <i class="fa fa-search fa-2x search-icon" aria-hidden="true"></i>
      </div>
      <input
        type="text"
        class="form-control"
        placeholder="Search"
        :value="search"
        @input="setSearch"
        autofocus="autofocus"
      />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "search",
  methods: {
    setSearch(event){
      this.$store.commit("SET_SEARCH", event.target.value);
    }
  },
  computed: {
    ...mapState({
      search: (state) => state.nameToFind,
    })
  },
};
</script>
