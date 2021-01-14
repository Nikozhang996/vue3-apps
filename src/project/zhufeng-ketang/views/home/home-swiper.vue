<template>
  <van-swipe>
    <template v-for="slider in sliderList" :key="slider.url">
      <van-swipe-item>
        <img :src="slider.url" :alt="slider.url" />
      </van-swipe-item>
    </template>
  </van-swipe>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { GlobalState } from "@/store";
import * as Types from "@/store/action-types";

export default defineComponent({
  name: "home-swiper",

  async setup() {
    const store = useStore<GlobalState>();

    const sliderList = computed(() => store.state.home.sliders);

    if (sliderList.value.length === 0) {
      await store.dispatch(`home/${Types.SET_SLIDER_LIST}`);
    }

    return {
      sliderList
    };
  }
});
</script>

<style scoped></style>
