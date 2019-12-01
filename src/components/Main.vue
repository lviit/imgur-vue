<template>
  <div>
    <select v-model="section">
      <template v-for="option in sectionOptions">
        <option :key="option">{{ option }}</option>
      </template>
    </select>
    <select v-model="sort">
      <template v-for="option in sortOptions">
        <option :key="option">{{ option }}</option>
      </template>
    </select>
    <select v-model="window">
      <template v-for="option in windowOptions">
        <option :key="option">{{ option }}</option>
      </template>
    </select>
    <input type="checkbox" v-model="viral" />
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
