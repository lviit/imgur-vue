<template>
  <div role="main">
    <h1>Vue imgur</h1>
    <div>
      <ItemDetails v-if="selectedImage" :item="selectedImage" :actions="actions" />
    </div>
    <div><Filters :actions="actions" :state="state" /></div>
    <div class="grid" aria-live="polite">
      <Item :key="image.id" :item="image" :actions="actions" v-for="image in state.images" />
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";
import ItemDetails from "./ItemDetails.vue";
import Filters from "./Filters.vue";

export default {
  props: ["actions", "state"],
  mounted() {
    this.actions.getImages();
  },
  computed: {
    selectedImage() {
      const { selectedImage, images } = this.state;
      return selectedImage ? images.find(({ id }) => id === selectedImage) : null;
    }
  },
  components: {
    Item,
    ItemDetails,
    Filters
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap");

body {
  font-family: "Open Sans", sans-serif;
}

* {
  box-sizing: border-box;
}

.grid {
  display: grid;
  grid-auto-rows: 320px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 20px;
}
</style>
