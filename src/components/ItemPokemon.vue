<template>
  <div class="item-pokemon mt-4">
    <div class="item-pokemon__name">
      <p class="item-pokemon__text mb-0">{{ name }}</p>
    </div>
    <div class="item-pokemon__favorite">
      <i
        class="fa fa-star fa-2x favorite-icon"
        aria-hidden="true"
      ></i>
    </div>
  </div>
</template>
<script>
export default {
  props: ["name"],
  name: "itempokemon",
};
</script>
