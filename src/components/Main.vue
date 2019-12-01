<template>
  <div>
    <template v-for="image in state.images">
      <div v-bind:key="image.id">{{ image.title }}</div>
    </template>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: ["actions", "state"],
  mounted() {
    console.log(this.actions);
    this.actions.getImages();
  }
};
</script>
