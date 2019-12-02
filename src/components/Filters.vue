<template>
  <div class="filters">
    <div class="filter">
      <label for="section" class="filter__label">section</label>
      <select id="section" class="filter__input" v-model="section">
        <option :key="option" v-for="option in sectionOptions">{{ option }}</option>
      </select>
    </div>
    <div class="filter">
      <label for="sort" class="filter__label">sort</label>
      <select id="sort" class="filter__input" v-model="sort">
        <option :key="option" v-for="option in sortOptions">{{ option }}</option>
      </select>
    </div>
    <div class="filter">
      <label for="window" class="filter__label">window</label>
      <select id="window" class="filter__input" v-model="window">
        <option :key="option" v-for="option in windowOptions">{{ option }}</option>
      </select>
    </div>
    <div class="filter">
      <label for="viral" class="filter__label">viral</label>
      <input id="viral" type="checkbox" v-model="viral" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["actions", "state"],
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
  }
};
</script>

<style>
.filters {
  display: flex;
  margin: 20px 0;
  display: flex;
  align-items: center;
}

.filter {
  margin-right: 20px;
}

.filter__label {
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
  color: "#eee";
  margin-right: 5px;
}

.filter__input {
  font-size: 16px;
}
</style>
