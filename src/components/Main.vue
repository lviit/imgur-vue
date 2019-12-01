<template>
  <div>
    <h1>Vue imgur</h1>
    <select v-model="section">
      <option :key="option" v-for="option in sectionOptions">{{ option }}</option>
    </select>
    <select v-model="sort">
      <option :key="option" v-for="option in sortOptions">{{ option }}</option>
    </select>
    <select v-model="window">
      <option :key="option" v-for="option in windowOptions">{{ option }}</option>
    </select>
    <input type="checkbox" v-model="viral" />
    <div class="container">
      <Item :key="image.id" :item="image" v-for="image in state.images" />
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  props: ["actions", "state"],
  mounted() {
    this.actions.getImages();
  },
  data() {
    const { section, sort, window, viral } = this.state;
    return {
      sectionOptions: ["hot", "top", "user"],
      sortOptions: ["viral", "top", "time", "rising"],
      windowOptions: ["day", "week", "month", "year", "all"],
      section,
      sort,
      window,
      viral
    };
  },
  watch: {
    section(section) {
      this.actions.setSection(section);
    },
    sort(sort) {
      this.actions.setSort(sort);
    },
    window(window) {
      this.actions.setWindow(window);
    },
    viral() {
      this.actions.toggleViral();
    },
    state(state, oldState) {
      if (
        state.section !== oldState.section ||
        state.sort !== oldState.sort ||
        state.window !== oldState.window ||
        state.viral !== oldState.viral
      ) {
        this.actions.getImages();
      }
    }
  },
  components: {
    Item
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap");

body {
  font-family: "Open Sans", sans-serif;
}

.container {
  display: grid;
  grid-auto-rows: 320px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 20px;
}
</style>
