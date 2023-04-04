<template>
    <div id="app">
      <top />
      <home />
      <footer-section />
    </div>
  </template>
<script lang="ts">
import { computed, defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
  name: "dashboard",
    setup() {
    return {

    };
  },

  data() {
    return {
      oponenteActivo: false,
    };
  },
  components: {
    top: defineAsyncComponent(() => import("./partials/top.vue")),
    home: defineAsyncComponent(() => import("./home/dashboardPage.vue")),
    footerSection: defineAsyncComponent(() => import("./partials/footer.vue")),
  },
  methods: {

  },
  computed: {

  },
});
</script>
<style lang="less" scoped>
.navbar-dashboard {
  --f7-navbar-height: 60px !important;
}
</style>

