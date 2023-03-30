<template>
    <div>
      <top-menu />
      <navbar-menu />
      <navbar-mobile />
      <transition>
        <router-view>
        </router-view>
      </transition>
      <footer-menu />
    </div>
  </template>
  <script lang="ts">
  import { defineAsyncComponent, defineComponent } from "vue";
  import { mapGetters } from "vuex";
  import { store } from "@/store/store";
  export default defineComponent({
    name: "app",
    components: {
      TopMenu: defineAsyncComponent(() => import("@components/partials/top.vue")),
    },
    setup() {
      const handleRefreshPage = async (done: () => void) => {
        try {

        } catch (error) {
          console.log(error);
        }
      };
      return {
        handleRefreshPage
      };
    },
    data() {
      return {
        tabs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      };
    },
    computed: {


      isLoadPage() {
        return !store.state.statusLoadPageLibrary;
      },
    },
  });
</script>
