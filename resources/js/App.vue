<template>
    <div>
      <top />
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
    top: defineAsyncComponent(() => import("../components/partials/top.vue")),
    footerSection: defineAsyncComponent(() => import("../components/partials/footer.vue")),
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

