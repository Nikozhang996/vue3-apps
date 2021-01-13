<template>
  <!--home-header-->
  <home-header
    :category="category"
    @set-current-category="setCurrentCategory"
  ></home-header>

  <!--home-container-->
  <div class="home-container" ref="HomeContainer">
    <!--轮播图-->
    <Suspense>
      <template #default>
        <home-swiper></home-swiper>
      </template>
      <template #fallback>
        <div>loading...</div>
      </template>
    </Suspense>

    <!--课程列表-->
    <home-list :lesson-list="lessonList"></home-list>

    <div v-if="isLoading">正在加载....</div>
    <div v-if="!hasMore">我是有底线的....</div>
  </div>
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
  // 使用computed建立计算属性
  const category = computed(function() {
    return store.state.home.currentCategory;
  });

  function setCurrentCategory(category: CATOGORY_TYPES) {
    // vuex models home/代表home模块
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
