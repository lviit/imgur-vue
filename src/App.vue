<template>
  <Provider
    :mapDispatchToProps="mapDispatchToProps"
    :mapStateToProps="mapStateToProps"
    :store="store"
  >
    <template #default="{ state, actions }">
      <Main :state="state" :actions="actions" />
    </template>
  </Provider>
</template>

<script>
import { bindActionCreators } from "redux";
import Provider from "vuejs-redux";
import * as Actions from "./store/actions";
import Main from "./components/Main.vue";
import store from "./store/store";

export default {
  methods: {
    mapStateToProps(state) {
      return { state };
    },

    mapDispatchToProps(dispatch) {
      return { actions: bindActionCreators(Actions, dispatch) };
    }
  },

  components: {
    Main,
    Provider
  },

  data: () => ({
    store
  })
};
</script>
