<template>
  <div>
    <template v-for="image in state.images">
      <Item :key="image.id" :item="image" />
    </template>
    <h1>Vue imgur</h1>
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  props: ["actions", "state"],
  mounted() {
    this.actions.getImages();
  },

  components: {
    Item,
  }
};
</script>
