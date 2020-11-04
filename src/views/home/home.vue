<template>
  <div>{{ category }}</div>
  <home-header></home-header>
  <home-swiper></home-swiper>
  <home-list></home-list>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import HomeHeader from "./home-header.vue";
import HomeList from "./home-list.vue";
import HomeSwiper from "./home-swiper.vue";
import { useStore } from "vuex";
import { GlobalState } from "@/store";

export default defineComponent({
  name: "home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeList
  },
  setup() {
    const store = useStore<GlobalState>();

    const category = computed(function() {
      return store.state.home.currentCategory;
    });

    return {
      category
    };
  }
});
</script>
