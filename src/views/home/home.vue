<template>
  <home-header
    :category="category"
    @set-current-category="setCurrentCategory"
  ></home-header>

  <div class="home-container" ref="HomeContainer">
    <home-swiper></home-swiper>
  </div>
  <home-list></home-list>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, ref } from "vue";
import HomeHeader from "./home-header.vue";
import HomeList from "./home-list.vue";
import HomeSwiper from "./home-swiper.vue";
import { Store, useStore } from "vuex";
import { GlobalState } from "@/store";
import { CATOGORY_TYPES } from "@/typings";
import * as Types from "@/store/action-types";
import { useLoadMore } from "@/hooks/useLoadMore";

function useCategory(store: Store<GlobalState>) {
  const category = computed(function() {
    return store.state.home.currentCategory;
  });

  function setCurrentCategory(category: CATOGORY_TYPES) {
    store.commit(`home/${Types.SET_CATEGORY}`, category);
  }

  return {
    category,
    setCurrentCategory
  };
}

function useLessonList(store: Store<GlobalState>) {
  const lessonList = computed(function() {
    return store.state.home.lessons.list;
  });

  onMounted(function() {
    if (lessonList.value.length === 0) {
      store.dispatch(`home/${Types.SET_LESSON_LIST}`);
    }
  });
  return {
    lessonList
  };
}
export default defineComponent({
  name: "home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeList
  },
  setup() {
    // 获取vuex
    const store = useStore<GlobalState>();
    // 课程类型
    const { category, setCurrentCategory } = useCategory(store);
    // 课程列表
    const { lessonList } = useLessonList(store);

    // 获取真实DOM
    const HomeContainer = ref<null | HTMLElement>(null);
    const { isLoading, hasMore } = useLoadMore(
      HomeContainer,
      store,
      `home${Types.SET_SLIDER_LIST}`
    );

    return {
      category,
      setCurrentCategory,
      lessonList,
      HomeContainer,
      isLoading,
      hasMore
    };
  }
});
</script>

<style lang="scss" scoped></style>

